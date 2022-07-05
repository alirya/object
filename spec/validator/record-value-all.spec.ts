import {RecordValueAllParameters} from '../../dist/validator/record-value-all';
import And from '../../dist/validatable/and';
import Or from '../../dist/validatable/or';
import Validatable from '@alirya/validatable/validatable';
import ValidatorInterface from '@alirya/validator/simple';
import Message from '@alirya/message/message';
import MessageMap from '../../dist/message/message/record/map';
import {TypeParameters} from '@alirya/type/validator/type';
import Instance from '@alirya/validator/validatable/validatable';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {

    type TypeValidatorValue = ValidatorInterface<unknown, string, Instance<unknown, string>>;

    let validator = TypeParameters('string');

    type Type = {
        name : string,
        address : string,
    };

    let value = {
        name : 'name',
        address : 'address',
    };

    it('implicit', function() {

        let property = RecordValueAllParameters(validator, And, MessageMap);

        let validatable = property(value);

        if(validatable.valid) {

            let string : Type = validatable.value;

        } else {

            let unknown : unknown = validatable.value;
        }

    });

    describe('explicit complete', function() {

        it('auto', function() {

            let property = RecordValueAllParameters<TypeValidatorValue>(validator,
                (v)=>And(v),
                MessageMap
            );

            let validatable = property(value);

            let unknown : unknown = validatable.value;
            let record : Type = validatable.value;

        });

        it('direct', function() {

            let property = RecordValueAllParameters<TypeValidatorValue>(validator,
                (v)=>And(<globalThis.Record<any, Validatable>>v),
                MessageMap
            );

            let validatable = property(value);

            let unknown : unknown = validatable.value;
            let record : Type = validatable.value;

        });
    });

    it('implicit partial', function() {

        let property = RecordValueAllParameters(validator,
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        let validatable = property(value);

        let unknown : unknown = validatable.value;
        let val : Type = validatable.value;

    });

    describe('explicit complete', function() {

        it('auto', function() {

            let property = RecordValueAllParameters<TypeValidatorValue>(
                validator,
                (v)=>And(<globalThis.Record<any, Validatable>>v),
                MessageMap
            );

            let validatable = property(value);

            let unknown : unknown = validatable.value;
            let string : Type = validatable.value;

        });

        it('direct', function() {

            let property = RecordValueAllParameters<TypeValidatorValue>(
                validator,
                (v)=>And(<globalThis.Record<any, Validatable>>v),
                (v)=>MessageMap(<globalThis.Record<any, Message>>v)
            );

            let validatable = property(value);

            let unknown : unknown = validatable.value;
            let string : Type = validatable.value;

        });
    });
});





describe('implicit complete', function() {

    describe('all valid', function() {

        let validator = TypeParameters('string');

        let value = {
            name : 'string',
            address : 'string',
            user : 'string',
        };

        it(`and validation`, () => {

            let property =  RecordValueAllParameters(validator,
                (v)=>And(v),
                MessageMap
            );

            let validatable = property(value);

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

            let property =  RecordValueAllParameters(validator,
                (v)=>Or(v),
                MessageMap
            );

            let validatable = property(value);

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

        let value = {
            name : 'string',
            age : 1,
            address : 'string',
        };

        let validator = TypeParameters('string');

        it(`and validation`, () => {

            let property = RecordValueAllParameters(validator,
                (v)=>And(v),
                MessageMap
            );

            let and = property(value);

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

            let property = RecordValueAllParameters(validator,
                (v)=>Or(v),
                MessageMap
            );

            let or = property(value);

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

        let value = {
            name : 2,
            age : 1,
            address : 3,
        };

        let validator = TypeParameters('string');

        it(`and validation`, () => {

            let property = RecordValueAllParameters(validator,
                (v)=>And(v),
                MessageMap
            );

            let and = property(value);

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

            let property = RecordValueAllParameters(validator,
                (v)=>Or(v),
                MessageMap
            );

            let or = property(value);
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
