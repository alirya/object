import {RecordKeyAllParameters} from '../../dist/validator/record-key-all.js';
import And from '../../dist/validatable/and.js';
import Or from '../../dist/validatable/or.js';
import Validatable from '@alirya/validatable/validatable.js';
import ValidatorInterface from '@alirya/validator/simple.js';
import Message from '@alirya/message/message.js';
import MessageMap from '../../dist/message/message/record/map.js';
import {TypeParameters} from '@alirya/type/validator/type.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import {CallbackParameters} from '@alirya/validator/callback.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {

    type TypeValidatorValue = ValidatorInterface<PropertyKey, string, string>;

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

        const property = RecordKeyAllParameters(validator, And, MessageMap);

        const validatable = property(value);

        if(validatable.valid) {

            const string : Type = validatable.value;

        } else {

            const unknown : unknown = validatable.value;
        }

    });

    describe('explicit complete', function() {

        it('auto', function() {

            const property = RecordKeyAllParameters<TypeValidatorValue>(validator,
                (v)=>And(v),
                MessageMap
            );

            const validatable = property(value);

            const unknown : unknown = validatable.value;
            const record : Type = validatable.value;

        });

        it('direct', function() {

            const property = RecordKeyAllParameters<TypeValidatorValue>(validator,
                (v)=>And(<globalThis.Record<any, Validatable>>v),
                MessageMap
            );

            const validatable = property(value);

            const unknown : unknown = validatable.value;
            const record : Type = validatable.value;

        });
    });

    it('implicit partial', function() {

        const property = RecordKeyAllParameters(validator,
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        const validatable = property(value);

        const unknown : unknown = validatable.value;
        const val : Type = validatable.value;

    });

    describe('explicit complete', function() {

        it('auto', function() {

            const property = RecordKeyAllParameters<TypeValidatorValue>(
                validator,
                (v)=>And(<globalThis.Record<any, Validatable>>v),
                MessageMap
            );

            const validatable = property(value);

            const unknown : unknown = validatable.value;
            const string : Type = validatable.value;

        });

        it('direct', function() {

            const property = RecordKeyAllParameters<TypeValidatorValue>(
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

            const property =  RecordKeyAllParameters(validator,
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

            const property =  RecordKeyAllParameters(validator,
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

        const validator = CallbackParameters<string, string>(function (value) {
            return  ['name', 'address'].includes(value);
        }, function (value, valid){
            return value + ' ' + (valid ? 'valid' : 'true');
        }, );

        const value = {
            name : 'string',
            age : 'string',
            address : 'string',
        };

        it(`and validation`, () => {

            const property = RecordKeyAllParameters(validator,
                (v)=>And(v),
                MessageMap
            );

            const and = property(value);

            expect<boolean>(and.valid).toBe(false);

            expect(and.validatables.name.valid).toBe(true);
            expect(and.validatables.name.message).toBe('name valid');

            expect(and.validatables.age.valid).toBe(false);
            expect(and.validatables.age.message).toBe('age true');

            expect(and.validatables.address.valid).toBe(true);
            expect(and.validatables.address.message).toBe('address valid');

            expect(and.value).toBe(value);
        });


        it(`or validation `, () => {

            const property = RecordKeyAllParameters(validator,
                (v)=>Or(v),
                MessageMap
            );

            const or = property(value);

            expect(or.valid).toBe(true);
            expect(or.value).toBe(value);

            expect(or.validatables.name.message).toBe('name valid');
            expect(or.validatables.name.valid).toBe(true);

            expect(or.validatables.age.message).toBe('age true');
            expect(or.validatables.age.valid).toBe(false);

            expect(or.validatables.address.message).toBe('address valid');
            expect(or.validatables.address.valid).toBe(true);

        });
    });


    describe('all invalid', function() {

        const validator = CallbackParameters<string, string>(function (value) {
            return ! ['name', 'age', 'address'].includes(value);
        },function (value, valid){
            return value + ' ' + (valid ? 'valid' : 'true');
        }, );


        const value = {
            name : 'string',
            age : 'string',
            address : 'string',
        };

        it(`and validation`, () => {

            const property = RecordKeyAllParameters(validator,
                (v)=>And(v),
                MessageMap
            );

            const and = property(value);

            expect<boolean>(and.valid).toBe(false);
            expect(and.value).toEqual(value);

            expect(and.validatables.name.valid).toBe(false);
            expect(and.validatables.name.message).toBe('name true');

            expect(and.validatables.age.valid).toBe(false);
            expect(and.validatables.age.message).toBe('age true');

            expect(and.validatables.address.valid).toBe(false);
            expect(and.validatables.address.message).toBe('address true');
        });

        it(`or validation `, () => {

            const property = RecordKeyAllParameters(validator,
                (v)=>Or(v),
                MessageMap
            );

            const or = property(value);

            expect<boolean>(or.valid).toBe(false);
            expect(or.value).toEqual(value);

            expect(or.validatables.name.message).toBe('name true');
            expect(or.validatables.name.valid).toBe(false);

            expect(or.validatables.age.message).toBe('age true');
            expect(or.validatables.age.valid).toBe(false);

            expect(or.validatables.address.message).toBe('address true');
            expect(or.validatables.address.valid).toBe(false);
        });
    });
});
