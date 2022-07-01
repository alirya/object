import Type from '@alirya/type/validator/type-parameters';
import {ValueCallbackParameters} from '../../../dist/validator/value-callback';
import {ValueParameters} from '../../../dist/validator/validatable/record/value';
import And from '../../../dist/validatable/and';
import MessageMap from '../../../dist/message/message/record/map';
import Or from '../../../dist/validatable/or';
import ValidatorValidatable from '../../../dist/validator/validatable/record/infer';
import {ValuePartialParameters} from '../../../dist/validator/validatable/record/value-partial';
import Validatable from '@alirya/validatable/validatable';
import Infer from '../../../dist/validator/validatable/record/infer';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


describe('flat', function() {

    let validator = {
        name : Type('string'),
        age : Type('number'),
        address : Type('string'),
    };

    type Messages = {
        name : string,
        address : string,
        age : string,
    };


    it(`and validation`, () => {

        let property = ValueCallbackParameters<any, string, Messages, typeof validator, Infer<typeof validator>>(validator, ValueParameters, And, result => MessageMap(result));

        let and = property({});

        expect<boolean>(and.valid).toBe(false);
        expect(and.value).toEqual({});

        expect(and.validatables.name.valid).toBe(false);
        expect(typeof and.validatables.name.message).toBe('string');

        expect(and.validatables.age.valid).toBe(false);
        expect(typeof and.validatables.age.message).toBe('string');

        expect(and.validatables.address.valid).toBe(false);
        expect(typeof and.validatables.address.message).toBe('string');
    });

    it(`or validation `, () => {

        let property = ValueCallbackParameters<any, string, Messages, typeof validator, Infer<typeof validator>>(validator, ValueParameters, Or, result => MessageMap(result));

        let or = property({});

        expect<boolean>(or.valid).toBe(false);
        expect(or.value).toEqual({});

        expect(typeof or.validatables.name.message).toBe('string');
        expect(or.validatables.name.valid).toBe(false);

        expect(typeof or.validatables.age.message).toBe('string');
        expect(or.validatables.age.valid).toBe(false);

        expect(typeof or.validatables.address.message).toBe('string');
        expect(or.validatables.address.valid).toBe(false);
    });
});






describe('recursive', function() {



    it(`and validation`, () => {

        let validator = {
            name : Type('string'),
            age : Type('number'),
            address : Type('string'),
            info : ValueCallbackParameters({
                    age : Type('string'),
                    hobby : Type('number'),
                    no : Type('string'),
                }, (value, validators) => <ValidatorValidatable<typeof validator>>ValuePartialParameters(value, validators),
                (v)=>And(v),
                MessageMap)
        };

        let property = ValueCallbackParameters(validator,
            (value, validators) => <ValidatorValidatable<typeof validator>>ValuePartialParameters(value, validators),
            (v)=>And(<Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        let and = property({});

        expect<boolean>(and.valid).toBe(false);
        expect(and.value).toEqual({});

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


        if(and.validatables.info) {

            fail('validatable.validatables.info should exist');
        }
    });

    it(`or validation `, () => {

        let validator = {
            name : Type('string'),
            age : Type('number'),
            address : Type('string'),
            info : ValueCallbackParameters({
                    age : Type('string'),
                    hobby : Type('number'),
                    no : Type('string'),
                }, (value, validators) => <ValidatorValidatable<typeof validator>>ValuePartialParameters(value, validators),
                (v)=>Or(v),
                MessageMap)
        };

        let property = ValueCallbackParameters(validator,
            (value, validators) => <ValidatorValidatable<typeof validator>>ValuePartialParameters(value, validators),
            (v)=>Or(<Record<PropertyKey, Validatable>>v),
            MessageMap
        );


        let or = property({});

        expect(or.value).toEqual({});
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

        if(or.validatables.info) {

            fail('validatable.validatables.info should exist');
        }

    });
});
