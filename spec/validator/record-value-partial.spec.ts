import {RecordValuePartialParameters} from '../../dist/validator/record-value-partial.js';
import And from '../../dist/validatable/and.js';
import Or from '../../dist/validatable/or.js';
import Validatable from '@alirya/validatable/validatable.js';
import MessageMap from '../../dist/message/message/record/map.js';
import {TypeParameters} from '@alirya/type/validator/type.js';
import ValidatorInterface from '@alirya/validator/simple.js';
import Instance from '@alirya/validator/validatable/validatable.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {

    const validator = TypeParameters('string');
    type TypeValidatorValue = ValidatorInterface<unknown, string, string>;

    const value = {
        name : 'string',
        address : 'string',
    };

    it('implicit partial', function() {

        const property = RecordValuePartialParameters(validator, And, MessageMap);

        const validatable = property(value);

        const unknown : unknown = validatable.value;
        const trues : true = validatable.valid;

        const string : typeof value = validatable.value;

    });

    it('explicit complete', function() {

        const property = RecordValuePartialParameters<TypeValidatorValue>(validator, And, MessageMap);

        const validatable = property(value);


        const unknown : unknown = validatable.value;
        const string : typeof value = validatable.value;
    });
});

describe('implicit incomplete', function() {

    describe('all valid', function() {

        const value = {
            name : 'string',
            address : 'string',
            user : 'string',
        };

        it(`and validation`, () => {

            const validator = TypeParameters('string');

            const property = RecordValuePartialParameters(
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


            const validator = TypeParameters('string');

            const property = RecordValuePartialParameters(
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
            name : 'string',
            age : 1,
            address : 'string',
        };

        it(`and validation`, () => {

            const validator = TypeParameters('string');

            const property = RecordValuePartialParameters(
                validator,
                (v)=>And(<Record<PropertyKey, Validatable>>v),
                MessageMap
            );

            const and = property(value);

            expect<boolean>(and.valid).toBe(false);
            expect(and.value).toBe(value);

            if(and.validatables.name) {
                expect(and.validatables.name.valid).toBe(true);
                expect(typeof and.validatables.name.message).toBe('string');

            } else {
                fail('validatable.validatables.name should exist');
            }

            if(and.validatables.age) {
                expect(and.validatables.age.valid).toBe(false);
                expect(typeof and.validatables.age.message).toBe('string');

            } else {
                fail('validatable.validatables.age should exist');
            }

            if(and.validatables.address) {
                fail('validatable.validatables.address should exist');
            }
        });


        it(`or validation `, () => {


            const validator = TypeParameters('string');

            const property = RecordValuePartialParameters(
                validator,
                (v)=>Or(<Record<PropertyKey, Validatable>>v),
                MessageMap
            );

            const or = property(value);

            expect(or.value).toBe(value);
            expect(or.valid).toBe(true);

            if(or.validatables.name) {
                expect(typeof or.validatables.name.message).toBe('string');
                expect(or.validatables.name.valid).toBe(true);
            } else {
                fail('validatable.validatables.name should exist');
            }

            if(or.validatables.age) {
                expect(typeof or.validatables.age.message).toBe('string');
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

            const validator = TypeParameters('string');

            const property = RecordValuePartialParameters(
                validator,
                (v)=>And(<Record<PropertyKey, Validatable>>v),
                MessageMap
            );

            const and = property(value);

            expect<boolean>(and.valid).toBe(false);
            expect(and.value).toEqual(value);

            if(and.validatables.name) {

                expect(and.validatables.name.valid).toBe(false);
                expect(typeof and.validatables.name.message).toBe('string');
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


            const validator = TypeParameters('string');

            const property = RecordValuePartialParameters(
                validator,
                (v)=>Or(<Record<PropertyKey, Validatable>>v),
                MessageMap
            );

            const or = property(value);

            expect(or.value).toEqual(value);
            expect<boolean>(or.valid).toBe(false);

            if(or.validatables.name) {

                expect(typeof or.validatables.name.message).toBe('string');
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
