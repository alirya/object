import {MapAllParameters} from '../../../dist/validator/map-all.js';
import And from '../../../dist/validatable/and.js';
import Or from '../../../dist/validatable/or.js';
import MessageMap from '../../../dist/message/message/record/map.js';
import {TypeParameters} from '@alirya/type/validator/type.js';
import TypeClass from '@alirya/type/validator/type.js';
import TypeString from '@alirya/type/assert/string/type.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


describe('implicit complete', function() {

    describe('all valid', function() {

        const value = {
            user : 'user',
            name : 'name',
            address : 'address',
        };

        it(`and validation`, () => {

            const validator = {
                name : TypeParameters('string'),
                address : TypeParameters('string'),
                user : TypeParameters('string'),
            };

            const property = MapAllParameters(validator, (v)=>And(v), MessageMap);

            const validatable = property(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            expect(validatable.validatables.name.valid).toBe(true);
            expect(validatable.validatables.name.message).toBe('name valid');

            expect(validatable.validatables.address.valid).toBe(true);
            expect(validatable.validatables.address.message).toBe('address valid');

            expect(validatable.validatables.user.valid).toBe(true);
            expect(validatable.validatables.user.message).toBe('user valid');
        });


        it(`or validation`, () => {


            const validator = {
                name : TypeParameters('string'),
                address : TypeParameters('string'),
                user : TypeParameters('string'),
            };

            const property = MapAllParameters(validator, (v)=>Or(v), MessageMap);

            const validatable = property(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            expect(validatable.validatables.name.valid).toBe(true);
            expect(validatable.validatables.name.message).toBe('name valid');

            expect(validatable.validatables.address.valid).toBe(true);
            expect(validatable.validatables.address.message).toBe('address valid');

            expect(validatable.validatables.user.valid).toBe(true);
            expect(validatable.validatables.user.message).toBe('user valid');
        });

    });


    describe('mixed', function() {

        const value = {
            age : '11',
            name : 'name',
            address : 'address',
        };

        it(`and validation`, () => {

            const validator = {
                name : TypeParameters('string'),
                age : TypeParameters('number'),
                address : TypeParameters('string'),
            };

            const property = MapAllParameters(validator, (v)=>And(v), MessageMap);

            const and = property(value);

            expect<boolean>(and.valid).toBe(false);
            expect(and.value).toBe(value);

            expect(and.validatables.name.valid).toBe(true);
            expect(and.validatables.name.message).toBe('name valid');

            expect(and.validatables.age.valid).toBe(false);
            expect(and.validatables.age.message).toBe('11 invalid');

            expect(and.validatables.address.valid).toBe(true);
            expect(and.validatables.address.message).toBe('address valid');

        });


        it(`or validation `, () => {

            const validator = {
                name : TypeParameters('string'),
                age : TypeParameters('number'),
                address : TypeParameters('string'),
            };

            const property = MapAllParameters(validator, (v)=>Or(v), MessageMap);

            const or = property(value);

            expect(or.valid).toBe(true);
            expect(or.value).toBe(value);

            expect(or.validatables.name.message).toBe('name valid');
            expect(or.validatables.name.valid).toBe(true);

            expect(or.validatables.age.message).toBe('11 invalid');
            expect(or.validatables.age.valid).toBe(false);

            expect(or.validatables.address.message).toBe('address valid');
            expect(or.validatables.address.valid).toBe(true);

        });
    });


    describe('all invalid', function() {

        const value = {
            name : {},
            age : {},
            address : {},
        };

        it(`and validation`, () => {

            const validator = {
                name : TypeParameters('string'),
                age : TypeParameters('number'),
                address : TypeParameters('string'),
            };

            const property = MapAllParameters(validator, (v)=>And(v), MessageMap);

            const and = property(value);

            expect<boolean>(and.valid).toBe(false);
            expect(and.value).toEqual(value);

            expect(and.validatables.name.valid).toBe(false);
            expect(and.validatables.name.message).toBe('[object Object] invalid');

            expect(and.validatables.age.valid).toBe(false);
            expect(and.validatables.age.message).toBe('[object Object] invalid');

            expect(and.validatables.address.valid).toBe(false);
            expect(and.validatables.address.message).toBe('[object Object] invalid');
        });

        it(`or validation `, () => {

            const validator = {
                name : TypeParameters('string'),
                age : TypeParameters('number'),
                address : TypeParameters('string'),
            };

            const property = MapAllParameters(validator, (v)=>Or(v), MessageMap);

            const or = property(value);
            expect<boolean>(or.valid).toBe(false);
            expect(or.value).toEqual(value);

            expect(or.validatables.name.message).toBe('[object Object] invalid');
            expect(or.validatables.name.valid).toBe(false);

            expect(or.validatables.age.message).toBe('[object Object] invalid');
            expect(or.validatables.age.valid).toBe(false);

            expect(or.validatables.address.message).toBe('[object Object] invalid');
            expect(or.validatables.address.valid).toBe(false);
        });
    });
});





describe('recursive', function() {

    describe('all valid', function() {


        const value = {
            user : 'user',
            name : 'name',
            address : 'address',
            info : {
                age : 5,
                hobby : 'string',
                no : 6,
            }
        };

        it(`and validation`, () => {


            const validator  = {
                name : TypeClass.Parameters('string', TypeString.Parameters),
                address : TypeParameters('string'),
                user : TypeParameters('string'),
                info : MapAllParameters({
                    age : TypeParameters('number'),
                    hobby : TypeParameters('string'),
                    no : TypeParameters('number'),
                },(v)=>And(v), MessageMap) /*as ValidatorSimple<any, ArgSub, Value<any> & Validatable & Validatables<Infer<Sub>> & Message<ArgNsg>>*/
            };

            const property = MapAllParameters(validator, (v)=>And(v), MessageMap);
            property(value).validatables.name;
            property(value).validatables.info;

            const validatable = property(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            expect(validatable.validatables.name.valid).toBe(true);
            expect(validatable.validatables.name.message).toBe('name valid');

            expect(validatable.validatables.address.valid).toBe(true);
            expect(validatable.validatables.address.message).toBe('address valid');

            expect(validatable.validatables.user.valid).toBe(true);
            expect(validatable.validatables.user.message).toBe('user valid');

            expect(validatable.validatables.info.valid).toBe(false);
            expect(validatable.validatables.info.value).toBe(value.info);

            expect(validatable.validatables.info.validatables.age.valid).toBe(true);
            expect(validatable.validatables.info.validatables.age.message).toBe('user valid');

            expect(validatable.validatables.info.validatables.hobby.valid).toBe(true);
            expect(validatable.validatables.info.validatables.hobby.message).toBe('user valid');

            expect(validatable.validatables.info.validatables.no.valid).toBe(true);
            expect(validatable.validatables.info.validatables.no.message).toBe('user valid');
        });


        it(`or validation`, () => {

            const validator  = {
                name : TypeClass.Parameters('string', TypeString.Parameters),
                address : TypeParameters('string'),
                user : TypeParameters('string'),
                info : MapAllParameters({
                    age : TypeParameters('number'),
                    hobby : TypeParameters('string'),
                    no : TypeParameters('number'),
                },(v)=>Or(v), MessageMap) /*as ValidatorSimple<any, ArgSub, Value<any> & Validatable & Validatables<Infer<Sub>> & Message<ArgNsg>>*/
            };

            const property = MapAllParameters(validator, (v)=>Or(v), MessageMap);

            const validatable = property(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            expect(validatable.validatables.name.valid).toBe(true);
            expect(validatable.validatables.name.message).toBe('name valid');

            expect(validatable.validatables.address.valid).toBe(true);
            expect(validatable.validatables.address.message).toBe('address valid');

            expect(validatable.validatables.user.valid).toBe(true);
            expect(validatable.validatables.user.message).toBe('user valid');

            expect(validatable.validatables.info.valid).toBe(false);
            expect(validatable.validatables.info.value).toBe(value.info);

            expect(validatable.validatables.info.validatables.age.valid).toBe(true);
            expect(validatable.validatables.info.validatables.age.message).toBe('user valid');

            expect(validatable.validatables.info.validatables.hobby.valid).toBe(true);
            expect(validatable.validatables.info.validatables.hobby.message).toBe('user valid');

            expect(validatable.validatables.info.validatables.no.valid).toBe(true);
            expect(validatable.validatables.info.validatables.no.message).toBe('user valid');
        });

    });


    describe('mixed', function() {

        const value = {
            age : '11',
            name : 'name',
            address : 'address',
            info : {
                age : '5',
                hobby : 'string',
                no : 6,
            }
        };

        it(`and validation`, () => {

            const validator = {
                name : TypeParameters('string'),
                age : TypeParameters('number'),
                address : TypeParameters('string'),
                info : MapAllParameters({
                    age : TypeParameters('number'),
                    hobby : TypeParameters('string'),
                    no : TypeParameters('number'),
                },(v)=>And(v), MessageMap)
            };

            const property = MapAllParameters(validator, (v)=>And(v), MessageMap);


            const and = property(value);

            expect<boolean>(and.valid).toBe(false);
            expect(and.value).toBe(value);

            expect(and.validatables.name.valid).toBe(true);
            expect(and.validatables.name.message).toBe('name valid');

            expect(and.validatables.age.valid).toBe(false);
            expect(and.validatables.age.message).toBe('11 invalid');

            expect(and.validatables.address.valid).toBe(true);
            expect(and.validatables.address.message).toBe('address valid');

            expect(and.validatables.info.valid).toBe(false);
            expect(and.validatables.info.value).toBe(value.info);

            expect(and.validatables.info.validatables.age.valid).toBe(false);
            expect(and.validatables.info.validatables.age.message).toBe('user valid');

            expect(and.validatables.info.validatables.hobby.valid).toBe(true);
            expect(and.validatables.info.validatables.hobby.message).toBe('user valid');

            expect(and.validatables.info.validatables.no.valid).toBe(true);
            expect(and.validatables.info.validatables.no.message).toBe('user valid');

        });


        it(`or validation `, () => {

            const validator = {
                name : TypeParameters('string'),
                age : TypeParameters('number'),
                address : TypeParameters('string'),
                info : MapAllParameters({
                    age : TypeParameters('number'),
                    hobby : TypeParameters('string'),
                    no : TypeParameters('number'),
                },(v)=>Or(v), MessageMap)
            };

            const property = MapAllParameters(validator, (v)=>Or(v), MessageMap);

            const or = property(value);

            expect(or.valid).toBe(true);
            expect(or.value).toBe(value);

            expect(or.validatables.name.message).toBe('name valid');
            expect(or.validatables.name.valid).toBe(true);

            expect(or.validatables.age.message).toBe('11 invalid');
            expect(or.validatables.age.valid).toBe(false);

            expect(or.validatables.address.message).toBe('address valid');
            expect(or.validatables.address.valid).toBe(true);

            expect(or.validatables.info.valid).toBe(true);
            expect(or.validatables.info.value).toBe(value.info);

            expect(or.validatables.info.validatables.age.valid).toBe(false);
            expect(or.validatables.info.validatables.age.message).toBe('user valid');

            expect(or.validatables.info.validatables.hobby.valid).toBe(true);
            expect(or.validatables.info.validatables.hobby.message).toBe('user valid');

            expect(or.validatables.info.validatables.no.valid).toBe(true);
            expect(or.validatables.info.validatables.no.message).toBe('user valid');

        });
    });


    describe('all invalid', function() {

        const value = {
            age : {},
            name : {},
            address : {},
            info : {
                age : {},
                hobby : {},
                no : {},
            }
        };

        it(`and validation`, () => {

            const validator = {
                name : TypeParameters('string'),
                age : TypeParameters('number'),
                address : TypeParameters('string'),
                info : MapAllParameters({
                    age : TypeParameters('number'),
                    hobby : TypeParameters('string'),
                    no : TypeParameters('number'),
                },(v)=>And(v), MessageMap)
            };

            const property = MapAllParameters(validator, (v)=>And(v), MessageMap);

            const and = property(value);

            expect<boolean>(and.valid).toBe(false);
            expect(and.value).toEqual(value);

            expect(and.validatables.name.valid).toBe(false);
            expect(and.validatables.name.message).toBe('[object Object] invalid');

            expect(and.validatables.age.valid).toBe(false);
            expect(and.validatables.age.message).toBe('[object Object] invalid');

            expect(and.validatables.address.valid).toBe(false);
            expect(and.validatables.address.message).toBe('[object Object] invalid');

            expect(and.validatables.info.valid).toBe(false);
            expect(and.validatables.info.value).toBe(value.info);

            expect(and.validatables.info.validatables.age.valid).toBe(false);
            expect(and.validatables.info.validatables.age.message).toBe('user valid');

            expect(and.validatables.info.validatables.hobby.valid).toBe(false);
            expect(and.validatables.info.validatables.hobby.message).toBe('user valid');

            expect(and.validatables.info.validatables.no.valid).toBe(false);
            expect(and.validatables.info.validatables.no.message).toBe('user valid');
        });

        it(`or validation `, () => {

            const validator = {
                name : TypeParameters('string'),
                age : TypeParameters('number'),
                address : TypeParameters('string'),
                info : MapAllParameters({
                    age : TypeParameters('number'),
                    hobby : TypeParameters('string'),
                    no : TypeParameters('number'),
                },(v)=>Or(v), MessageMap)
            };

            const property = MapAllParameters(validator, (v)=>Or(v), MessageMap);

            const or = property(value);
            expect<boolean>(or.valid).toBe(false);
            expect(or.value).toEqual(value);

            expect(or.validatables.name.message).toBe('[object Object] invalid');
            expect(or.validatables.name.valid).toBe(false);

            expect(or.validatables.age.message).toBe('[object Object] invalid');
            expect(or.validatables.age.valid).toBe(false);

            expect(or.validatables.address.message).toBe('[object Object] invalid');
            expect(or.validatables.address.valid).toBe(false);

            expect(or.validatables.info.valid).toBe(false);
            expect(or.validatables.info.value).toBe(value.info);

            expect(or.validatables.info.validatables.age.valid).toBe(false);
            expect(or.validatables.info.validatables.age.message).toBe('user valid');

            expect(or.validatables.info.validatables.hobby.valid).toBe(false);
            expect(or.validatables.info.validatables.hobby.message).toBe('user valid');

            expect(or.validatables.info.validatables.no.valid).toBe(false);
            expect(or.validatables.info.validatables.no.message).toBe('user valid');
        });
    });
});


