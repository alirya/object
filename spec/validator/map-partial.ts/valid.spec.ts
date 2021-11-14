import Map from "../../../dist/validator/map-partial";
import And from "../../../dist/validatable/and";
import Or from "../../../dist/validatable/or";
import Validatable from "@dikac/t-validatable/validatable";
import MessageMap from "../../../dist/message/message/record/map";
import Type from "@dikac/t-type/validator/type";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("flat", function() {

    let value = {
        name : 'name',
        address : 'age',
        user : 'address',
    };

    it(`and validation`, () => {

        let validator = {
            name : Type.Parameters('string'),
            address : Type.Parameters('string'),
            user : Type.Parameters('string'),
        };

        let property = Map.Parameters(validator,
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
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

    });


    it(`or validation`, () => {

        let validator = {
            name : Type.Parameters('string'),
            address : Type.Parameters('string'),
            user : Type.Parameters('string'),
        };

        let property = Map.Parameters(validator,
            (v)=>Or(<globalThis.Record<PropertyKey, Validatable>>v),
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
            info : Map.Parameters({
                age : Type.Parameters('number'),
                hobby : Type.Parameters('string'),
                no : Type.Parameters('number'),
            },(v)=>And(v), MessageMap)
        };

        let property = Map.Parameters(validator,
            (v)=>And(v),
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

        if(validatable.validatables.info) {

            expect(validatable.validatables.info.valid).toBe(true);
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

        } else {

            fail('validatable.validatables.info should exist');
        }
    });


    it(`or validation`, () => {

        let validator = {
            name : Type.Parameters('string'),
            address : Type.Parameters('string'),
            user : Type.Parameters('string'),
            info : Map.Parameters({
                age : Type.Parameters('number'),
                hobby : Type.Parameters('string'),
                no : Type.Parameters('number'),
            },(v)=>Or(v), MessageMap)
        };

        let property = Map.Parameters(validator,
            (v)=>Or(v),
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

        if(validatable.validatables.info) {

            expect(validatable.validatables.info.valid).toBe(true);
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

        } else {

            fail('validatable.validatables.info should exist');
        }

    });

});

