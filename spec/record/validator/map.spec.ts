import Validator from "../../validator/factory";
import Map from "../../../dist/record/validator/map";
import And from "../../../dist/record/validatable/and";
import Or from "../../../dist/record/validatable/or";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatorInterface from "@dikac/t-validator/validator";
import Message from "@dikac/t-message/message";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

    describe("explicit typed", function() {

        let validator = {
            name : new Validator('string'),
            address : new Validator('string'),
        };

        type TypeValidator = {
            name : ValidatorInterface<string, Validatable & Message<string>>,
            address :ValidatorInterface<string, Validatable & Message<string>>,
        };

        type Type = {
            name : string,
            address : string,
        }

        let value = {
            name : 'name',
            address : 'address',
        };


        describe("implicit", function() {

            let property = new Map(validator, And);

            let validatable = property.validate(value);

            let unknown : unknown = validatable.value;
            // @ts-expect-error
            let string : Type = validatable.value;

        });

        describe("auto", function() {

            let property = new Map<globalThis.Record<keyof typeof validator, ValidatorInterface<string, Validatable & Message<string>>>>(validator,
                (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v)
            );

            let validatable = property.validate(value);

            let unknown : unknown = validatable.value;
            let string : Type = validatable.value;

        });

        describe("direct", function() {

            let property = new Map<TypeValidator>(validator, And);

            let validatable = property.validate(value);

            let unknown : unknown = validatable.value;
            let string : Type = validatable.value;

        });
    });


});

describe("implicit incomplete", function() {

    describe("all valid", function() {

        let validator = {
            name : new Validator('string'),
            address : new Validator('string'),
            user : new Validator('string'),
        };

        let value = {
            name : 'name',
            address : 'age',
            user : 'address',
        };

        let property = new Map(validator,
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v)
        );


        it(`and validation`, () => {

            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            if(validatable.validatables.name) {

                expect(validatable.validatables.name.valid).toBe(true);
                expect(validatable.validatables.name.message).toBe('name valid');

            } else {

                fail('validatable.validatables.name should exist');
            }


            if(validatable.validatables.address) {

                expect(validatable.validatables.address.valid).toBe(true);
                expect(validatable.validatables.address.message).toBe('age valid');

            } else {

                fail('validatable.validatables.address should exist');
            }


            if(validatable.validatables.user) {

                expect(validatable.validatables.user.valid).toBe(true);
                expect(validatable.validatables.user.message).toBe('address valid');

            } else {

                fail('validatable.validatables.user should exist');
            }

        });


        it(`or validation`, () => {

            property.validation = (v)=>Or(<globalThis.Record<PropertyKey, Validatable>>v);
            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);


            if(validatable.validatables.name) {

                expect(validatable.validatables.name.valid).toBe(true);
                expect(validatable.validatables.name.message).toBe('name valid');

            } else {

                fail('validatable.validatables.name should exist');
            }


            if(validatable.validatables.address) {

                expect(validatable.validatables.address.valid).toBe(true);
                expect(validatable.validatables.address.message).toBe('age valid');

            } else {

                fail('validatable.validatables.address should exist');
            }


            if(validatable.validatables.user) {

                expect(validatable.validatables.user.valid).toBe(true);
                expect(validatable.validatables.user.message).toBe('address valid');

            } else {

                fail('validatable.validatables.user should exist');
            }
        });
    });


    describe("mixed", function() {

        let validator = {
            name : new Validator('string'),
            age : new Validator('number'),
            address : new Validator('string'),
        };

        let value = {
            name : 'name',
            age : "15",
            address : 'address',
        };

        let property = new Map(validator,
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v)
        );

        it(`and validation`, () => {

            let and = property.validate(value);

            expect(and.valid).toBe(false);
            expect(and.value).toBe(value);

            if(and.validatables.name) {
                expect(and.validatables.name.valid).toBe(true);
                expect(and.validatables.name.message).toBe('name valid');

            } else {
                fail('validatable.validatables.name should exist');
            }

            if(and.validatables.age) {
                expect(and.validatables.age.valid).toBe(false);
                expect(and.validatables.age.message).toBe('15 invalid');

            } else {
                fail('validatable.validatables.age should exist');
            }

            if(and.validatables.address) {
                fail('validatable.validatables.address should exist');
            }
        });


        it(`or validation `, () => {

            property.validation = (v)=>Or(<globalThis.Record<PropertyKey, Validatable>>v);

            let or = property.validate(value);
            expect(or.value).toBe(value);
            expect(or.valid).toBe(true);

            if(or.validatables.name) {
                expect(or.validatables.name.message).toBe('name valid');
                expect(or.validatables.name.valid).toBe(true);
            } else {
                fail('validatable.validatables.name should exist');
            }

            if(or.validatables.age) {
                expect(or.validatables.age.message).toBe('15 invalid');
                expect(or.validatables.age.valid).toBe(false);
            } else {
                fail('validatable.validatables.age should exist');
            }

            if(or.validatables.address) {
                fail('validatable.validatables.address should exist');
            }

        });
    });


    describe("all invalid", function() {

        let validator = {
            name : new Validator('string'),
            age : new Validator('number'),
            address : new Validator('string'),
        };

        let value = {
            name : {},
            age : {},
            address : {},
        };

        let property = new Map(validator,
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v)
        );

        it(`and validation`, () => {

            let and = property.validate(value);

            expect(and.valid).toBe(false);
            expect(and.value).toEqual(value);

            if(and.validatables.name) {
                expect(and.validatables.name.valid).toBe(false);
                expect(and.validatables.name.message).toBe('[object Object] invalid');
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

            property.validation = (v)=>Or(<globalThis.Record<PropertyKey, Validatable>>v);

            let or = property.validate(value);

            expect(or.value).toEqual(value);
            expect(or.valid).toBe(false);

            if(or.validatables.name) {
                expect(or.validatables.name.message).toBe('[object Object] invalid');
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

