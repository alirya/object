import Value from "../../dist/validator/record-value-partial";
import And from "../../dist/validatable/and";
import Or from "../../dist/validatable/or";
import Validatable from "@dikac/t-validatable/validatable";
import MessageMap from "../../dist/message/message/record/map";
import Type from "@dikac/t-type/validator/type";
import ValidatorInterface from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

    let validator = Type('string');
    type TypeValidatorValue = ValidatorInterface<unknown, string, Instance<unknown, string>>;

    let value = {
        name : 'string',
        address : 'string',
    };

    describe("implicit partial", function() {

        let property = Value.Parameter(validator, And, MessageMap);

        let validatable = property(value);

        let unknown : unknown = validatable.value;

        let string : typeof value= validatable.value;

    });

    describe("explicit complete", function() {

        let property = Value.Parameter<TypeValidatorValue>(validator, And, MessageMap);

        let validatable = property(value);


        let unknown : unknown = validatable.value;
        let string : typeof value = validatable.value;
    });
});

describe("implicit incomplete", function() {

    describe("all valid", function() {

        let value = {
            name : 'string',
            address : 'string',
            user : 'string',
        };

        it(`and validation`, () => {

            let validator = Type('string');

            let property = Value.Parameter(
                validator,
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

        });


        it(`or validation`, () => {


            let validator = Type('string');

            let property = Value.Parameter(
                validator,
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
        });
    });


    describe("mixed", function() {

        let value = {
            name : 'string',
            age : 1,
            address : 'string',
        };

        it(`and validation`, () => {

            let validator = Type('string');

            let property = Value.Parameter(
                validator,
                (v)=>And(<Record<PropertyKey, Validatable>>v),
                MessageMap
            );

            let and = property(value);

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


            let validator = Type('string');

            let property = Value.Parameter(
                validator,
                (v)=>Or(<Record<PropertyKey, Validatable>>v),
                MessageMap
            );

            let or = property(value);

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


    describe("all invalid", function() {

        let value = {
            name : 1,
            age : 1,
            address : 1,
        };

        it(`and validation`, () => {

            let validator = Type('string');

            let property = Value.Parameter(
                validator,
                (v)=>And(<Record<PropertyKey, Validatable>>v),
                MessageMap
            );

            let and = property(value);

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


            let validator = Type('string');

            let property = Value.Parameter(
                validator,
                (v)=>Or(<Record<PropertyKey, Validatable>>v),
                MessageMap
            );

            let or = property(value);

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
