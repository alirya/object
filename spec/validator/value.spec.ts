import {ValueAllParameters} from '../../dist/validator/value-all.js';
import And from '../../dist/validatable/and.js';
import Or from '../../dist/validatable/or.js';
import ValidatablesInterface from '../../dist/validatable/validatables/validatables.js';
import Validatables from '../../dist/validatable/validatables/validatables.js';
import Validatable from '@axiona/validatable/validatable.js';
import MessageMap from '../../dist/message/message/record/map.js';
import {TypeParameters} from '@axiona/type/validator/type.js';
import Simple from '@axiona/validator/simple.js';
import ValidatorValidatable from '@axiona/validator/validatable/validatable.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {

    const validator = {
        name : TypeParameters('string'),
        address : TypeParameters('string'),
    };

    describe('implicit complete', function() {

        const property = ValueAllParameters(validator, (v)=>And(v), MessageMap);

        const validatable = property('data');


        const key : Validatable = validatable.validatables.name;
        const validatables : ValidatablesInterface = validatable;
        const record : Record<PropertyKey, Validatable> = validatable.validatables;

        // @ts-expect-error
        const and : Validatables = validatable.validatables;

        if(validatable.valid) {

            const unknown : unknown = validatable.value;
            const string : string = validatable.value;

        } else {

            const unknown : unknown = validatable.value;
            const string : string = validatable.value;
        }
        it('', ()=>expect(true).toBeTrue());
    });

    describe('explicit complete', function() {

        const property = ValueAllParameters<string>(validator,
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        const validatable = property('data');

        const unknown : unknown = validatable.value;
        const string : string = validatable.value;
        it('', ()=>expect(true).toBeTrue());
    });
});


describe('implicit complete', function() {

    describe('all valid', function() {

        const value = 'data';

        it(`and validation`, () => {

            const validator = {
                name : TypeParameters('string'),
                address : TypeParameters('string'),
                user : TypeParameters('string'),
            };

            const property = ValueAllParameters(validator, (v)=>And(v), MessageMap);

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

            const validator = {
                name : TypeParameters('string'),
                address : TypeParameters('string'),
                user : TypeParameters('string'),
            };

            const property = ValueAllParameters(validator, (v)=>Or(v), MessageMap);

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

        it(`and validation`, () => {

            const validator = {
                name : TypeParameters('string'),
                age : TypeParameters('number') as Simple<unknown, string, string>,
                address : TypeParameters('string'),
            };

            const property = ValueAllParameters<unknown, string>(validator, (v)=>And(v), MessageMap);

            const and = property(<unknown>'data');

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

            const validator = {
                name : TypeParameters('string'),
                age : TypeParameters('number') as Simple<unknown, string, string>,
                address : TypeParameters('string'),
            };

            const property = ValueAllParameters<unknown, string>(validator,(v)=>Or(v), MessageMap);

            const or = property('data');

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

            const validator = {
                name : TypeParameters('string'),
                age : TypeParameters('number') as Simple<unknown, string, string>,
                address : TypeParameters('string'),
            };

            const property = ValueAllParameters<unknown, string>(validator,(v)=>And(v), MessageMap);

            const and = property({});

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

            const validator = {
                name : TypeParameters('string'),
                age : TypeParameters('number') as Simple<unknown, string, string>,
                address : TypeParameters('string'),
            };

            const property = ValueAllParameters<unknown, string>(validator,(v)=>Or(v), MessageMap);

            const or = property({});
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

        const value = 'data';


        it(`and validation`, () => {

            const validator = {
                name : TypeParameters('string'),
                address : TypeParameters('string'),
                user : TypeParameters('string'),
                info : ValueAllParameters({
                    age : TypeParameters('string'),
                    hobby : TypeParameters('string'),
                    no : TypeParameters('string'),
                }, (v)=>And(v), MessageMap)
            };

            const property = ValueAllParameters(validator, (v)=>And(v), MessageMap);

            const validatable = property(value);

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

            const validator = {
                name : TypeParameters('string'),
                address : TypeParameters('string'),
                user : TypeParameters('string'),
                info : ValueAllParameters({
                    age : TypeParameters('string'),
                    hobby : TypeParameters('string'),
                    no : TypeParameters('string'),
                }, (v)=>Or(v), MessageMap)
            };

            const property = ValueAllParameters(validator, (v)=>Or(v), MessageMap);

            const validatable = property(value);

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

            const validator = {
                name : TypeParameters('string'),
                age : TypeParameters('number'),
                address : TypeParameters('string'),
                info : ValueAllParameters({
                    age : TypeParameters('string'),
                    hobby : TypeParameters('number'),
                    no : TypeParameters('string'),
                }, (v)=>And(v), MessageMap)
            };

            const property = ValueAllParameters(validator,(v)=>And(v), MessageMap);

            const and = property('data');

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

            const validator = {
                name : TypeParameters('string'),
                age : TypeParameters('number'),
                address : TypeParameters('string'),
                info : ValueAllParameters({
                    age : TypeParameters('string'),
                    hobby : TypeParameters('number'),
                    no : TypeParameters('string'),
                }, (v)=>Or(v), MessageMap)
            };

            const property = ValueAllParameters(validator,(v)=>Or(v), MessageMap);

            const or = property('data');

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

        const validator = {
            name : TypeParameters('string'),
            age : TypeParameters('number'),
            address : TypeParameters('string'),
            info : ValueAllParameters/*<unknown, string|number>*/({
                age : TypeParameters('string'),
                hobby : TypeParameters('number'),
                no : TypeParameters('string'),
            }, (v)=>And(v), MessageMap)
        };

        const property = ValueAllParameters/*<unknown, string|number>*/(validator,(v)=>And(v), MessageMap);

            const and = property({});

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

            const validator = {
                name : TypeParameters('string'),
                age : TypeParameters('number'),
                address : TypeParameters('string'),
                info : ValueAllParameters/*<unknown, string|number>*/({
                    age : TypeParameters('string'),
                    hobby : TypeParameters('number'),
                    no : TypeParameters('string'),
                }, (v)=>Or(v), MessageMap)
            };

            const property = ValueAllParameters/*<unknown, string|number>*/(validator,(v)=>Or(v), MessageMap);

            const or = property({});
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
