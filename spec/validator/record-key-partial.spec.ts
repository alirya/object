import {RecordKeyPartialParameters} from '../../dist/validator/record-key-partial.js';
import And from '../../dist/validatable/and.js';
import Or from '../../dist/validatable/or.js';
import Validatable from '@alirya/validatable/validatable.js';
import MessageMap from '../../dist/message/message/record/map.js';
import {TypeParameters} from '@alirya/type/validator/type.js';
import ValidatorInterface from '@alirya/validator/simple.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import Callbacks from '@alirya/validator/callback-parameters.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {

    let validator = TypeParameters('string');
    type TypeValidatorValue = ValidatorInterface<unknown, string, Instance<unknown, string>>;

    let value = {
        name : 'string',
        address : 'string',
    };

    it('implicit partial', function() {

        let property = RecordKeyPartialParameters(validator, And, MessageMap);

        let validatable = property(value);

        let unknown : unknown = validatable.value;

        let string : typeof value= validatable.value;

    });

    it('explicit complete', function() {

        let property = RecordKeyPartialParameters/*<Record<PropertyKey, any>, Record<string, any>, TypeValidatorValue>*/(validator, And, MessageMap);

        let validatable = property(value);

        let unknown : unknown = validatable.value;
        let string : typeof value = validatable.value;
    });
});

describe('implicit incomplete', function() {

    describe('all valid', function() {

        let validator = TypeParameters('string');

        let value = {
            name : 'string',
            address : 'string',
            user : 'string',
        };

        it(`and validation`, () => {

            let property = RecordKeyPartialParameters(
                validator,
                (v)=>And(<Record<PropertyKey, Validatable>>v),
                MessageMap
            );

            let validatable = property(value);

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

            let property = RecordKeyPartialParameters(
                validator,
                (v)=>Or(<Record<PropertyKey, Validatable>>v),
                MessageMap
            );

            let validatable = property(value);

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

        let value = {
            name : true,
            age : 1,
            address : 'string',
        };


        it(`and validation`, () => {

            let validator = Callbacks<string, string>(function (value) {
                return  ['name', 'address'].includes(value);
            }, function (value, valid){
                return value + ' ' + (valid ? 'valid' : 'true');
            }, );

            let property = RecordKeyPartialParameters(
                validator,
                (v)=>And(<Record<PropertyKey, Validatable>>v),
                MessageMap
            );

            let and = property(value);

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

            let validator = Callbacks<string, string>(function (value) {
                return  ['name', 'address'].includes(value);
            }, function (value, valid){
                return value + ' ' + (valid ? 'valid' : 'true');
            }, );

            let property = RecordKeyPartialParameters(
                validator,
                (v)=>Or(<Record<PropertyKey, Validatable>>v),
                MessageMap
            );

            let or = property(value);

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

        let value = {
            name : 1,
            age : 1,
            address : 1,
        };


        it(`and validation`, () => {

            let validator = Callbacks<string, string>(function (value) {
                return ! ['name', 'age', 'address'].includes(value);
            },function (value, valid){
                return value + ' ' + (valid ? 'valid' : 'true');
            });

            let property = RecordKeyPartialParameters(
                validator,
                (v)=>And(<Record<PropertyKey, Validatable>>v),
                MessageMap
            );

            let and = property(value);

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

            let validator = Callbacks<string, string>(function (value) {
                return ! ['name', 'age', 'address'].includes(value);
            },function (value, valid){
                return value + ' ' + (valid ? 'valid' : 'true');
            });

            let property = RecordKeyPartialParameters(
                validator,
                (v)=>Or(<Record<PropertyKey, Validatable>>v),
                MessageMap
            );

            let or = property(value);

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
