import MapCallback from "../../../dist/validator/map-callback";
import ValidateMapPartial from "../../../dist/validator/validatable/record/map-partial";
import ValidateMap from "../../../dist/validator/validatable/record/map";
import And from "../../../dist/validatable/and";
import Or from "../../../dist/validatable/or";
import MessageMap from "../../../dist/message/message/record/map";
import Type from "@dikac/t-type/validator/type";
import MapCallbackFunction from "../../../dist/validator/map-callback";
import InferReturn from "../../../dist/validator/validatable/record/infer";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("flat", function() {

    let value = {
        user : 'user',
        name : 'name',
        address : 'address',
    };

    it(`and validation`, () => {

        let validator = {
            name : Type.Parameters('string'),
            address : Type.Parameters('string'),
            user : Type.Parameters('string'),
        };

        let property = MapCallback.Parameters<typeof validator, InferReturn<typeof validator>>(validator, ValidateMap.Parameters, And, MessageMap);

        let validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toEqual(value);

        expect(validatable.validatables.name.valid).toBe(true);
        expect(typeof validatable.validatables.name.message).toBe('string');

        expect(validatable.validatables.address.valid).toBe(true);
        expect(typeof validatable.validatables.address.message).toBe('string');

        expect(validatable.validatables.user.valid).toBe(true);
        expect(typeof validatable.validatables.user.message).toBe('string');
    });


    it(`or validation`, () => {

        let validator = {
            name : Type.Parameters('string'),
            address : Type.Parameters('string'),
            user : Type.Parameters('string'),
        };

        let property = MapCallback.Parameters<typeof validator, InferReturn<typeof validator>>(validator, ValidateMap.Parameters, Or, MessageMap);

        let validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toEqual(value);

        expect(validatable.validatables.name.valid).toBe(true);
        expect(typeof validatable.validatables.name.message).toBe('string');

        expect(validatable.validatables.address.valid).toBe(true);
        expect(typeof validatable.validatables.address.message).toBe('string');

        expect(validatable.validatables.user.valid).toBe(true);
        expect(typeof validatable.validatables.user.message).toBe('string');
    });

});



describe("recursive", function() {

    let value = {
        name : 'name',
        address : 'age',
        user : 'address',
        info : {
            age : 5,
            hobby : 'string',
            no : 6,
        }
    };

    it(`and validation`, () => {

        let validator = {
            name : Type.Parameters('string'),
            address : Type.Parameters('string'),
            user : Type.Parameters('string'),
            info : MapCallbackFunction.Parameters({
                    age : Type.Parameters('number'),
                    hobby : Type.Parameters('string'),
                    no : Type.Parameters('number')
                },
                (value, validators) => ValidateMapPartial.Parameters(value, validators),
                And, MessageMap)
        };

        let property = MapCallback.Parameters(validator,
            (value, validators) => ValidateMapPartial.Parameters(value, validators),
            And,
            MessageMap
        );

        let validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toEqual(value);

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

        // @ts-expect-error
        expect(validatable.validatables.info.valid).toBe(true);

        // @ts-expect-error
        expect(validatable.validatables.info.value).toEqual(value.info);

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

    });

    it(`or validation`, () => {


        let validator = {
            name : Type.Parameters('string'),
            address : Type.Parameters('string'),
            user : Type.Parameters('string'),
            info : MapCallbackFunction.Parameters({
                    age : Type.Parameters('number'),
                    hobby : Type.Parameters('string'),
                    no : Type.Parameters('number')
                },
                (value, validators) => ValidateMapPartial.Parameters(value, validators),
                Or, MessageMap)
        };

        let property = MapCallback.Parameters(validator,
            (value, validators) => ValidateMapPartial.Parameters(value, validators),
            Or,
            MessageMap
        );

        let validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).not.toBe(value);


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

        // @ts-expect-error
        expect(validatable.validatables.info.valid).toBe(true);
        // @ts-expect-error
        expect(validatable.validatables.info.value).not.toBe(value.info);

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
    });

});

