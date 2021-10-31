import Map from "../../../dist/validator/map-partial";
import And from "../../../dist/validatable/and";
import Or from "../../../dist/validatable/or";
import Validatable from "@dikac/t-validatable/validatable";
import MessageMap from "../../../dist/message/message/record/map";
import Type from "@dikac/t-type/validator/type";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("implicit incomplete", function() {



    let value = {
        name : {},
        age : {},
        address : {},
    };

    let validator = {
        name : Type('string'),
        age : Type('number'),
        address : Type('string'),
    };

    it(`and validation`, () => {

        let property = Map.Parameter(validator,
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        let and = property(value);

        expect(and.valid).toBe(false);
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

        let property = Map.Parameter(validator,
            (v)=>Or(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        let or = property(value);

        expect(or.value).toEqual(value);
        expect(or.valid).toBe(false);

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



describe("recursive", function() {

    let value = {
        name : {},
        age : {},
        address : {},
        info : {
            age : {},
            hobby : {},
            no : {},
        }
    };


    it(`and validation`, () => {

        let validator = {
            name : Type('string'),
            age : Type('number'),
            address : Type('string'),
            info : Map.Parameter({
                age : Type('number'),
                hobby : Type('string'),
                no : Type('number'),
            },(v)=>And(v), MessageMap)
        };

        let property = Map.Parameter(validator,
            (v)=>And(v),
            MessageMap
        );

        let and = property(value);

        expect(and.valid).toBe(false);
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


        let validator = {
            name : Type('string'),
            age : Type('number'),
            address : Type('string'),
            info : Map.Parameter({
                age : Type('number'),
                hobby : Type('string'),
                no : Type('number'),
            },(v)=>Or(v), MessageMap)
        };

        let property = Map.Parameter(validator,
            (v)=>Or(v),
            MessageMap
        );

        let or = property(value);

        expect(or.value).toEqual(value);
        expect(or.valid).toBe(false);

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
            fail('validatable.validatables.info should not exist');
        }
    });

});

