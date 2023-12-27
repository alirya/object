import {RecordKeyPartialParameters} from '../../dist/validator/record-key-partial.js';
import And from '../../dist/validatable/and.js';
import Or from '../../dist/validatable/or.js';
import Validatable from '@axiona/validatable/validatable.js';
import MessageMap from '../../dist/message/message/record/map.js';
import {TypeParameters} from '@axiona/type/validator/type.js';
import ValidatorInterface from '@axiona/validator/simple.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import {CallbackParameters} from '@axiona/validator/callback.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {

    const validator = TypeParameters('string');
    type TypeValidatorValue = ValidatorInterface<unknown, string, string>;

    const value = {
        name : 'string',
        address : 'string',
    };

    it('implicit partial', function() {

        const property = RecordKeyPartialParameters(validator, And, MessageMap);

        const validatable = property(value);

        const unknown : unknown = validatable.value;

        const string : typeof value= validatable.value;

    });

    it('explicit complete', function() {

        const property = RecordKeyPartialParameters/*<Record<PropertyKey, any>, Record<string, any>, TypeValidatorValue>*/(validator, And, MessageMap);

        const validatable = property(value);

        const unknown : unknown = validatable.value;
        const string : typeof value = validatable.value;
    });
});

describe('implicit incomplete', function() {

    describe('all valid', function() {

        const validator = TypeParameters('string');

        const value = {
            name : 'string',
            address : 'string',
            user : 'string',
        };

        it(`and validation`, () => {

            const property = RecordKeyPartialParameters(
                validator,
                (v)=>And(<Record<PropertyKey, Validatable>>v),
                MessageMap
            );

            const validatable = property(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            if(validatable.validatables.name) {

                expect(validatable.validatables.name.valid).toBe(true);
                expect(typeof validatable.validatables.name.message).toBe('string');

            } else {

                fail('validatable.validatables.name should exist');
            }


            if(validatable.validatables.address) {

                expect(validatable.validatables.address.valid).toBe(true);
                expect(typeof validatable.validatables.address.message).toBe('string');

            } else {

                fail('validatable.validatables.address should exist');
            }


            if(validatable.validatables.user) {

                expect(validatable.validatables.user.valid).toBe(true);
                expect(typeof validatable.validatables.user.message).toBe('string');

            } else {

                fail('validatable.validatables.user should exist');
            }

        });


        it(`or validation`, () => {

            const property = RecordKeyPartialParameters(
                validator,
                (v)=>Or(<Record<PropertyKey, Validatable>>v),
                MessageMap
            );

            const validatable = property(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);


            if(validatable.validatables.name) {

                expect(validatable.validatables.name.valid).toBe(true);
                expect(typeof validatable.validatables.name.message).toBe('string');

            } else {

                fail('validatable.validatables.name should exist');
            }


            if(validatable.validatables.address) {

                expect(validatable.validatables.address.valid).toBe(true);
                expect(typeof validatable.validatables.address.message).toBe('string');

            } else {

                fail('validatable.validatables.address should exist');
            }


            if(validatable.validatables.user) {

                expect(validatable.validatables.user.valid).toBe(true);
                expect(typeof validatable.validatables.user.message).toBe('string');

            } else {

                fail('validatable.validatables.user should exist');
            }
        });
    });


    describe('mixed', function() {

        const value = {
            name : true,
            age : 1,
            address : 'string',
        };


        it(`and validation`, () => {

            const validator = CallbackParameters<string, string>(function (value) {
                return  ['name', 'address'].includes(value);
            }, function (value, valid){
                return value + ' ' + (valid ? 'valid' : 'true');
            }, );

            const property = RecordKeyPartialParameters(
                validator,
                (v)=>And(<Record<PropertyKey, Validatable>>v),
                MessageMap
            );

            const and = property(value);

            expect<boolean>(and.valid).toBe(false);
            expect(and.value).toBe(value);

            if(and.validatables.name) {
                expect(and.validatables.name.valid).toBe(true);
                expect(and.validatables.name.message).toBe('name valid');

            } else {
                fail('validatable.validatables.name should exist');
            }

            if(and.validatables.age) {
                expect(and.validatables.age.valid).toBe(false);
                expect(and.validatables.age.message).toBe('age true');

            } else {
                fail('validatable.validatables.age should exist');
            }

            if(and.validatables.address) {
                fail('validatable.validatables.address should exist');
            }
        });


        it(`or validation `, () => {

            const validator = CallbackParameters<string, string>(function (value) {
                return  ['name', 'address'].includes(value);
            }, function (value, valid){
                return value + ' ' + (valid ? 'valid' : 'true');
            }, );

            const property = RecordKeyPartialParameters(
                validator,
                (v)=>Or(<Record<PropertyKey, Validatable>>v),
                MessageMap
            );

            const or = property(value);

            expect(or.value).toBe(value);
            expect(or.valid).toBe(true);

            if(or.validatables.name) {
                expect(or.validatables.name.message).toBe('name valid');
                expect(or.validatables.name.valid).toBe(true);
            } else {
                fail('validatable.validatables.name should exist');
            }

            if(or.validatables.age) {
                expect(or.validatables.age.message).toBe('age true');
                expect(or.validatables.age.valid).toBe(false);
            } else {
                fail('validatable.validatables.age should exist');
            }

            if(or.validatables.address) {
                fail('validatable.validatables.address should exist');
            }

        });
    });


    describe('all invalid', function() {

        const value = {
            name : 1,
            age : 1,
            address : 1,
        };


        it(`and validation`, () => {

            const validator = CallbackParameters<string, string>(function (value) {
                return ! ['name', 'age', 'address'].includes(value);
            },function (value, valid){
                return value + ' ' + (valid ? 'valid' : 'true');
            });

            const property = RecordKeyPartialParameters(
                validator,
                (v)=>And(<Record<PropertyKey, Validatable>>v),
                MessageMap
            );

            const and = property(value);

            expect<boolean>(and.valid).toBe(false);
            expect(and.value).toEqual(value);

            if(and.validatables.name) {

                expect(and.validatables.name.valid).toBe(false);
                expect(and.validatables.name.message).toBe('name true');
            } else {
                fail('validatable.validatables.name should exist');
            }

            if(and.validatables.age) {
                fail('validatable.validatables.age should not exist');
            }

            if(and.validatables.address) {
                fail('validatable.validatables.address should not exist');
            }
        });

        it(`or validation `, () => {

            const validator = CallbackParameters<string, string>(function (value) {
                return ! ['name', 'age', 'address'].includes(value);
            },function (value, valid){
                return value + ' ' + (valid ? 'valid' : 'true');
            });

            const property = RecordKeyPartialParameters(
                validator,
                (v)=>Or(<Record<PropertyKey, Validatable>>v),
                MessageMap
            );

            const or = property(value);

            expect(or.value).toEqual(value);
            expect<boolean>(or.valid).toBe(false);

            if(or.validatables.name) {

                expect(or.validatables.name.message).toBe('name true');
                expect(or.validatables.name.valid).toBe(false);
            } else {
                fail('validatable.validatables.name should exist');
            }

            if(or.validatables.age) {
                fail('validatable.validatables.age should not exist');
            }

            if(or.validatables.address) {
                fail('validatable.validatables.address should not exist');
            }

        });
    });
});
