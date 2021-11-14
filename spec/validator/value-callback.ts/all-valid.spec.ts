import Type from "@dikac/t-type/validator/type";
import ValueCallback from "../../../dist/validator/value-callback";
import ValidateValue from "../../../dist/validator/validatable/record/value";
import And from "../../../dist/validatable/and";
import MessageMap from "../../../dist/message/message/record/map";
import Or from "../../../dist/validatable/or";
import ValidatorValidatable from "../../../dist/validator/validatable/record/infer";
import ValidateValuePartial from "../../../dist/validator/validatable/record/value-partial";
import Validatable from "@dikac/t-validatable/validatable";
import Infer from "../../../dist/validator/validatable/record/infer";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("flat", function() {

    type Messages = {
        name : string,
        address : string,
        user : string,
    }

    let validator = {
        name : Type.Parameters('string'),
        address : Type.Parameters('string'),
        user : Type.Parameters('string'),
    };

    let value = 'data';

    it(`and validation`, () => {

        let property = ValueCallback.Parameters<any, string, Messages, typeof validator, Infer<typeof validator>>(validator, ValidateValue.Parameter, And, result => MessageMap(result));

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

        let property = ValueCallback.Parameters<any, string, Messages, typeof validator, Infer<typeof validator>>(validator, ValidateValue.Parameters, Or, result => MessageMap(result));

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


describe("recursive", function() {

    let value = 'data';

    it(`and validation`, () => {

        let validator = {
            name : Type.Parameters('string'),
            address : Type.Parameters('string'),
            user : Type.Parameters('string'),
            info : ValueCallback.Parameters({
                    age : Type.Parameters('string'),
                    hobby : Type.Parameters('string'),
                    no : Type.Parameters('string'),
                }, (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValuePartial.Parameters(value, validators),
                (v)=>And(v),
                MessageMap)
        };

        let property = ValueCallback.Parameters(validator,
            (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValuePartial.Parameters(value, validators),
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

        if(validatable.validatables.info) {

            expect(validatable.validatables.info.valid).toBe(true);
            expect(validatable.validatables.info.value).toBe('data');

            // @ts-expect-error
            expect(validatable.validatables.info.validatables.age.valid).toBe(true);
            // @ts-expect-error
            expect(typeof validatable.validatables.info.validatables.age.message).toBe('string');

            // @ts-expect-error
            expect(validatable.validatables.info.validatables.hobby.valid).toBe(true);
            // @ts-expect-error
            expect(typeof validatable.validatables.info.validatables.hobby.message).toBe('string');

            // @ts-expect-error
            expect(validatable.validatables.info.validatables.no.valid).toBe(true);
            // @ts-expect-error
            expect(typeof validatable.validatables.info.validatables.no.message).toBe('string');

        } else {

            fail('validatable.validatables.info should exist');
        }

    });


    it(`or validation`, () => {


        let validator = {
            name : Type.Parameters('string'),
            address : Type.Parameters('string'),
            user : Type.Parameters('string'),
            info : ValueCallback.Parameters({
                    age : Type.Parameters('string'),
                    hobby : Type.Parameters('string'),
                    no : Type.Parameters('string'),
                }, (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValuePartial.Parameters(value, validators),
                (v)=>Or(v),
                MessageMap)
        };


        let property = ValueCallback.Parameters(validator,
            (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValuePartial.Parameters(value, validators),
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

        if(validatable.validatables.info) {

            expect(validatable.validatables.info.valid).toBe(true);
            expect(validatable.validatables.info.value).toBe('data');

            // @ts-expect-error
            expect(validatable.validatables.info.validatables.age.valid).toBe(true);
            // @ts-expect-error
            expect(typeof validatable.validatables.info.validatables.age.message).toBe('string');

            // @ts-expect-error
            expect(validatable.validatables.info.validatables.hobby.valid).toBe(true);
            // @ts-expect-error
            expect(typeof validatable.validatables.info.validatables.hobby.message).toBe('string');

            // @ts-expect-error
            expect(validatable.validatables.info.validatables.no.valid).toBe(true);
            // @ts-expect-error
            expect(typeof validatable.validatables.info.validatables.no.message).toBe('string');

        } else {

            fail('validatable.validatables.info should exist');
        }
    });
});
