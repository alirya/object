import {RecordValueAllParameters} from '../../dist/validator/record-value-all.js';
import And from '../../dist/validatable/and.js';
import Or from '../../dist/validatable/or.js';
import Validatable from '@alirya/validatable/validatable.js';
import ValidatorInterface from '@alirya/validator/simple.js';
import Message from '@alirya/message/message.js';
import MessageMap from '../../dist/message/message/record/map.js';
import {TypeParameters} from '@alirya/type/validator/type.js';
import Instance from '@alirya/validator/validatable/validatable.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {

    type TypeValidatorValue = ValidatorInterface<unknown, string, string>;

    const validator = TypeParameters('string');

    type Type = {
        name : string,
        address : string,
    };

    const value = {
        name : 'name',
        address : 'address',
    };

    it('implicit', function() {

        const property = RecordValueAllParameters(validator, And, MessageMap);

        const validatable = property(value);

        if(validatable.valid) {

            const string : Type = validatable.value;

        } else {

            const unknown : unknown = validatable.value;
        }

    });

    describe('explicit complete', function() {

        it('auto', function() {

            const property = RecordValueAllParameters<TypeValidatorValue>(validator,
                (v)=>And(v),
                MessageMap
            );

            const validatable = property(value);

            const unknown : unknown = validatable.value;
            const record : Type = validatable.value;

        });

        it('direct', function() {

            const property = RecordValueAllParameters<TypeValidatorValue>(validator,
                (v)=>And(<globalThis.Record<any, Validatable>>v),
                MessageMap
            );

            const validatable = property(value);

            const unknown : unknown = validatable.value;
            const record : Type = validatable.value;

        });
    });

    it('implicit partial', function() {

        const property = RecordValueAllParameters(validator,
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        const validatable = property(value);

        const unknown : unknown = validatable.value;
        const val : Type = validatable.value;

    });

    describe('explicit complete', function() {

        it('auto', function() {

            const property = RecordValueAllParameters<TypeValidatorValue>(
                validator,
                (v)=>And(<globalThis.Record<any, Validatable>>v),
                MessageMap
            );

            const validatable = property(value);

            const unknown : unknown = validatable.value;
            const string : Type = validatable.value;

        });

        it('direct', function() {

            const property = RecordValueAllParameters<TypeValidatorValue>(
                validator,
                (v)=>And(<globalThis.Record<any, Validatable>>v),
                (v)=>MessageMap(<globalThis.Record<any, Message>>v)
            );

            const validatable = property(value);

            const unknown : unknown = validatable.value;
            const string : Type = validatable.value;

        });
    });
});





describe('implicit complete', function() {

    describe('all valid', function() {

        const validator = TypeParameters('string');

        const value = {
            name : 'string',
            address : 'string',
            user : 'string',
        };

        it(`and validation`, () => {

            const property =  RecordValueAllParameters(validator,
                (v)=>And(v),
                MessageMap
            );

            const validatable = property(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            expect(validatable.validatables.name.valid).toBe(true);
            expect(typeof validatable.validatables.name.message).toBe('string');

            expect(validatable.validatables.address.valid).toBe(true);
            expect(typeof validatable.validatables.address.message).toBe('string');

            expect(validatable.validatables.user.valid).toBe(true);
            expect(typeof validatable.validatables.user.message).toBe('string');
        });


        it(`or validation`, () => {

            const property =  RecordValueAllParameters(validator,
                (v)=>Or(v),
                MessageMap
            );

            const validatable = property(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            expect(validatable.validatables.name.valid).toBe(true);
            expect(typeof validatable.validatables.name.message).toBe('string');

            expect(validatable.validatables.address.valid).toBe(true);
            expect(typeof validatable.validatables.address.message).toBe('string');

            expect(validatable.validatables.user.valid).toBe(true);
            expect(typeof validatable.validatables.user.message).toBe('string');
        });
    });


    describe('mixed', function() {

        const value = {
            name : 'string',
            age : 1,
            address : 'string',
        };

        const validator = TypeParameters('string');

        it(`and validation`, () => {

            const property = RecordValueAllParameters(validator,
                (v)=>And(v),
                MessageMap
            );

            const and = property(value);

            expect<boolean>(and.valid).toBe(false);

            expect(and.validatables.name.valid).toBe(true);
            expect(typeof and.validatables.name.message).toBe('string');

            expect(and.validatables.age.valid).toBe(false);
            expect(typeof and.validatables.age.message).toBe('string');

            expect(and.validatables.address.valid).toBe(true);
            expect(typeof and.validatables.address.message).toBe('string');

            expect(and.value).toBe(value);
        });


        it(`or validation `, () => {

            const property = RecordValueAllParameters(validator,
                (v)=>Or(v),
                MessageMap
            );

            const or = property(value);

            expect(or.valid).toBe(true);
            expect(or.value).toBe(value);

            expect(typeof or.validatables.name.message).toBe('string');
            expect(or.validatables.name.valid).toBe(true);

            expect(typeof or.validatables.age.message).toBe('string');
            expect(or.validatables.age.valid).toBe(false);

            expect(typeof or.validatables.address.message).toBe('string');
            expect(or.validatables.address.valid).toBe(true);

        });
    });


    describe('all invalid', function() {

        const value = {
            name : 2,
            age : 1,
            address : 3,
        };

        const validator = TypeParameters('string');

        it(`and validation`, () => {

            const property = RecordValueAllParameters(validator,
                (v)=>And(v),
                MessageMap
            );

            const and = property(value);

            expect<boolean>(and.valid).toBe(false);
            expect(and.value).toEqual(value);

            expect(and.validatables.name.valid).toBe(false);
            expect(typeof and.validatables.name.message).toBe('string');

            expect(and.validatables.age.valid).toBe(false);
            expect(typeof and.validatables.age.message).toBe('string');

            expect(and.validatables.address.valid).toBe(false);
            expect(typeof and.validatables.address.message).toBe('string');
        });

        it(`or validation `, () => {

            const property = RecordValueAllParameters(validator,
                (v)=>Or(v),
                MessageMap
            );

            const or = property(value);
            expect<boolean>(or.valid).toBe(false);
            expect(or.value).toEqual(value);

            expect(typeof or.validatables.name.message).toBe('string');
            expect(or.validatables.name.valid).toBe(false);

            expect(typeof or.validatables.age.message).toBe('string');
            expect(or.validatables.age.valid).toBe(false);

            expect(typeof or.validatables.address.message).toBe('string');
            expect(or.validatables.address.valid).toBe(false);
        });
    });
});
