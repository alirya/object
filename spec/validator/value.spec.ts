import {ValueAllParameters} from '../../dist/validator/value-all';
import And from '../../dist/validatable/and';
import Or from '../../dist/validatable/or';
import ValidatablesInterface from '../../dist/validatable/validatables/validatables';
import Validatables from '../../dist/validatable/validatables/validatables';
import Validatable from '@alirya/validatable/validatable';
import MessageMap from '../../dist/message/message/record/map';
import Type from '@alirya/type/validator/type-parameters';
import Simple from '@alirya/validator/simple';
import ValidatorValidatable from '@alirya/validator/validatable/validatable';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {

    let validator = {
        name : Type('string'),
        address : Type('string'),
    };

    describe('implicit complete', function() {

        let property = ValueAllParameters(validator, (v)=>And(v), MessageMap);

        let validatable = property('data');


        let key : Validatable = validatable.validatables.name;
        let validatables : ValidatablesInterface = validatable;
        let record : Record<PropertyKey, Validatable> = validatable.validatables;

        // @ts-expect-error
        let and : Validatables = validatable.validatables;

        if(validatable.valid) {

            let unknown : unknown = validatable.value;
            let string : string = validatable.value;

        } else {

            let unknown : unknown = validatable.value;
            let string : string = validatable.value;
        }

    });

    describe('explicit complete', function() {

        let property = ValueAllParameters<string>(validator,
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        let validatable = property('data');

        let unknown : unknown = validatable.value;
        let string : string = validatable.value;

    });
});


describe('implicit complete', function() {

    describe('all valid', function() {

        let value = 'data';

        it(`and validation`, () => {

            let validator = {
                name : Type('string'),
                address : Type('string'),
                user : Type('string'),
            };

            let property = ValueAllParameters(validator, (v)=>And(v), MessageMap);

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

            let validator = {
                name : Type('string'),
                address : Type('string'),
                user : Type('string'),
            };

            let property = ValueAllParameters(validator, (v)=>Or(v), MessageMap);

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

        it(`and validation`, () => {

            let validator = {
                name : Type('string'),
                age : Type('number') as Simple<unknown, string, ValidatorValidatable<unknown, string>>,
                address : Type('string'),
            };

            let property = ValueAllParameters<unknown, string>(validator, (v)=>And(v), MessageMap);

            let and = property(<unknown>'data');

            expect(and.valid).toBe(false);

            expect(and.validatables.name.valid).toBe(true);
            expect(typeof and.validatables.name.message).toBe('string');

            expect(and.validatables.age.valid).toBe(false);
            expect(typeof and.validatables.age.message).toBe('string');

            expect(and.validatables.address.valid).toBe(true);
            expect(typeof and.validatables.address.message).toBe('string');

            expect(and.value).toBe('data');
        });


        it(`or validation `, () => {

            let validator = {
                name : Type('string'),
                age : Type('number') as Simple<unknown, string, ValidatorValidatable<unknown, string>>,
                address : Type('string'),
            };

            let property = ValueAllParameters<unknown, string>(validator,(v)=>Or(v), MessageMap);

            let or = property('data');

            expect(or.valid).toBe(true);
            expect(or.value).toBe('data');

            expect(typeof or.validatables.name.message).toBe('string');
            expect(or.validatables.name.valid).toBe(true);

            expect(typeof or.validatables.age.message).toBe('string');
            expect(or.validatables.age.valid).toBe(false);

            expect(typeof or.validatables.address.message).toBe('string');
            expect(or.validatables.address.valid).toBe(true);

        });
    });


    describe('all invalid', function() {

        it(`and validation`, () => {

            let validator = {
                name : Type('string'),
                age : Type('number') as Simple<unknown, string, ValidatorValidatable<unknown, string>>,
                address : Type('string'),
            };

            let property = ValueAllParameters<unknown, string>(validator,(v)=>And(v), MessageMap);

            let and = property({});

            expect(and.valid).toBe(false);
            expect(and.value).toEqual({});

            expect(and.validatables.name.valid).toBe(false);
            expect(typeof and.validatables.name.message).toBe('string');

            expect(and.validatables.age.valid).toBe(false);
            expect(typeof and.validatables.age.message).toBe('string');

            expect(and.validatables.address.valid).toBe(false);
            expect(typeof and.validatables.address.message).toBe('string');
        });

        it(`or validation `, () => {

            let validator = {
                name : Type('string'),
                age : Type('number') as Simple<unknown, string, ValidatorValidatable<unknown, string>>,
                address : Type('string'),
            };

            let property = ValueAllParameters<unknown, string>(validator,(v)=>Or(v), MessageMap);

            let or = property({});
            expect(or.valid).toBe(false);
            expect(or.value).toEqual({});

            expect(typeof or.validatables.name.message).toBe('string');
            expect(or.validatables.name.valid).toBe(false);

            expect(typeof or.validatables.age.message).toBe('string');
            expect(or.validatables.age.valid).toBe(false);

            expect(typeof or.validatables.address.message).toBe('string');
            expect(or.validatables.address.valid).toBe(false);
        });
    });
});



describe('recursive', function() {

    describe('all valid', function() {

        let value = 'data';


        it(`and validation`, () => {

            let validator = {
                name : Type('string'),
                address : Type('string'),
                user : Type('string'),
                info : ValueAllParameters({
                    age : Type('string'),
                    hobby : Type('string'),
                    no : Type('string'),
                }, (v)=>And(v), MessageMap)
            };

            let property = ValueAllParameters(validator, (v)=>And(v), MessageMap);

            let validatable = property(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            expect(validatable.validatables.name.valid).toBe(true);
            expect(typeof validatable.validatables.name.message).toBe('string');

            expect(validatable.validatables.address.valid).toBe(true);
            expect(typeof validatable.validatables.address.message).toBe('string');

            expect(validatable.validatables.user.valid).toBe(true);
            expect(typeof validatable.validatables.user.message).toBe('string');

            if(validatable.validatables.info) {

                expect(validatable.validatables.info.valid).toBe(true);
                expect(validatable.validatables.info.value).toBe('data');

                expect(validatable.validatables.info.validatables.age.valid).toBe(true);
                expect(typeof validatable.validatables.info.validatables.age.message).toBe('string');

                expect(validatable.validatables.info.validatables.hobby.valid).toBe(true);
                expect(typeof validatable.validatables.info.validatables.hobby.message).toBe('string');

                expect(validatable.validatables.info.validatables.no.valid).toBe(true);
                expect(typeof validatable.validatables.info.validatables.no.message).toBe('string');

            } else {

                fail('validatable.validatables.info should exist');
            }
        });


        it(`or validation`, () => {

            let validator = {
                name : Type('string'),
                address : Type('string'),
                user : Type('string'),
                info : ValueAllParameters({
                    age : Type('string'),
                    hobby : Type('string'),
                    no : Type('string'),
                }, (v)=>Or(v), MessageMap)
            };

            let property = ValueAllParameters(validator, (v)=>Or(v), MessageMap);

            let validatable = property(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            expect(validatable.validatables.name.valid).toBe(true);
            expect(typeof validatable.validatables.name.message).toBe('string');

            expect(validatable.validatables.address.valid).toBe(true);
            expect(typeof validatable.validatables.address.message).toBe('string');

            expect(validatable.validatables.user.valid).toBe(true);
            expect(typeof validatable.validatables.user.message).toBe('string');

            if(validatable.validatables.info) {

                expect(validatable.validatables.info.valid).toBe(true);
                expect(validatable.validatables.info.value).toBe('data');

                expect(validatable.validatables.info.validatables.age.valid).toBe(true);
                expect(typeof validatable.validatables.info.validatables.age.message).toBe('string');

                expect(validatable.validatables.info.validatables.hobby.valid).toBe(true);
                expect(typeof validatable.validatables.info.validatables.hobby.message).toBe('string');

                expect(validatable.validatables.info.validatables.no.valid).toBe(true);
                expect(typeof validatable.validatables.info.validatables.no.message).toBe('string');

            } else {

                fail('validatable.validatables.info should exist');
            }
        });

    });


    describe('mixed', function() {

        it(`and validation`, () => {

            let validator = {
                name : Type('string'),
                age : Type('number'),
                address : Type('string'),
                info : ValueAllParameters({
                    age : Type('string'),
                    hobby : Type('number'),
                    no : Type('string'),
                }, (v)=>And(v), MessageMap)
            };

            let property = ValueAllParameters(validator,(v)=>And(v), MessageMap);

            let and = property('data');

            expect<boolean>(and.valid).toBe(false);

            expect(and.validatables.name.valid).toBe(true);
            expect(typeof and.validatables.name.message).toBe('string');

            expect(and.validatables.age.valid).toBe(false);
            expect(typeof and.validatables.age.message).toBe('string');

            expect(and.validatables.address.valid).toBe(true);
            expect(typeof and.validatables.address.message).toBe('string');

            expect(and.value).toBe('data');

            if(and.validatables.info) {

                expect(and.validatables.info.valid).toBe(false);
                expect(and.validatables.info.value).toBe('data');

                expect(and.validatables.info.validatables.age.valid).toBe(true);
                expect(typeof and.validatables.info.validatables.age.message).toBe('string');

                expect(and.validatables.info.validatables.hobby.valid).toBe(false);
                expect(typeof and.validatables.info.validatables.hobby.message).toBe('string');

                expect(and.validatables.info.validatables.no.valid).toBe(true);
                expect(typeof and.validatables.info.validatables.no.message).toBe('string');

            } else {

                fail('validatable.validatables.info should exist');
            }
        });


        it(`or validation `, () => {

            let validator = {
                name : Type('string'),
                age : Type('number'),
                address : Type('string'),
                info : ValueAllParameters({
                    age : Type('string'),
                    hobby : Type('number'),
                    no : Type('string'),
                }, (v)=>Or(v), MessageMap)
            };

            let property = ValueAllParameters(validator,(v)=>Or(v), MessageMap);

            let or = property('data');

            expect(or.valid).toBe(true);
            expect(or.value).toBe('data');

            expect(typeof or.validatables.name.message).toBe('string');
            expect(or.validatables.name.valid).toBe(true);

            expect(typeof or.validatables.age.message).toBe('string');
            expect(or.validatables.age.valid).toBe(false);

            expect(typeof or.validatables.address.message).toBe('string');
            expect(or.validatables.address.valid).toBe(true);

            if(or.validatables.info) {

                expect(or.validatables.info.valid).toBe(true);
                expect(or.validatables.info.value).toBe('data');

                expect(or.validatables.info.validatables.age.valid).toBe(true);
                expect(typeof or.validatables.info.validatables.age.message).toBe('string');

                expect(or.validatables.info.validatables.hobby.valid).toBe(false);
                expect(typeof or.validatables.info.validatables.hobby.message).toBe('string');

                expect(or.validatables.info.validatables.no.valid).toBe(true);
                expect(typeof or.validatables.info.validatables.no.message).toBe('string');

            } else {

                fail('validatable.validatables.info should exist');
            }

        });
    });

    describe('all invalid', function() {


        it(`and validation`, () => {

        let validator = {
            name : Type('string'),
            age : Type('number'),
            address : Type('string'),
            info : ValueAllParameters/*<unknown, string|number>*/({
                age : Type('string'),
                hobby : Type('number'),
                no : Type('string'),
            }, (v)=>And(v), MessageMap)
        };

        let property = ValueAllParameters/*<unknown, string|number>*/(validator,(v)=>And(v), MessageMap);

            let and = property({});

            expect<boolean>(and.valid).toBe(false);
            expect(and.value).toEqual({});

            expect(and.validatables.name.valid).toBe(false);
            expect(typeof and.validatables.name.message).toBe('string');

            expect(and.validatables.age.valid).toBe(false);
            expect(typeof and.validatables.age.message).toBe('string');

            expect(and.validatables.address.valid).toBe(false);
            expect(typeof and.validatables.address.message).toBe('string');

            if(and.validatables.info) {

                expect(and.validatables.info.valid).toBe(false);
                expect(and.validatables.info.value).toEqual({});

                expect(and.validatables.info.validatables.age.valid).toBe(false);
                expect(typeof and.validatables.info.validatables.age.message).toBe('string');

                expect(and.validatables.info.validatables.hobby.valid).toBe(false);
                expect(typeof and.validatables.info.validatables.hobby.message).toBe('string');

                expect(and.validatables.info.validatables.no.valid).toBe(false);
                expect(typeof and.validatables.info.validatables.no.message).toBe('string');

            } else {

                fail('validatable.validatables.info should exist');
            }
        });

        it(`or validation `, () => {

            let validator = {
                name : Type('string'),
                age : Type('number'),
                address : Type('string'),
                info : ValueAllParameters/*<unknown, string|number>*/({
                    age : Type('string'),
                    hobby : Type('number'),
                    no : Type('string'),
                }, (v)=>Or(v), MessageMap)
            };

            let property = ValueAllParameters/*<unknown, string|number>*/(validator,(v)=>Or(v), MessageMap);

            let or = property({});
            expect<boolean>(or.valid).toBe(false);
            expect(or.value).toEqual({});

            expect(typeof or.validatables.name.message).toBe('string');
            expect(or.validatables.name.valid).toBe(false);

            expect(typeof or.validatables.age.message).toBe('string');
            expect(or.validatables.age.valid).toBe(false);

            expect(typeof or.validatables.address.message).toBe('string');
            expect(or.validatables.address.valid).toBe(false);

            if(or.validatables.info) {

                expect(or.validatables.info.valid).toBe(false);
                expect(or.validatables.info.value).toEqual({});

                expect(or.validatables.info.validatables.age.valid).toBe(false);
                expect(typeof or.validatables.info.validatables.age.message).toBe('string');

                expect(or.validatables.info.validatables.hobby.valid).toBe(false);
                expect(typeof or.validatables.info.validatables.hobby.message).toBe('string');

                expect(or.validatables.info.validatables.no.valid).toBe(false);
                expect(typeof or.validatables.info.validatables.no.message).toBe('string');

            } else {

                fail('validatable.validatables.info should exist');
            }
        });
    });
});
