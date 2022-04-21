import MapAll from '../../../dist/validator/map-all-parameters';
import And from '../../../dist/validatable/and';
import Or from '../../../dist/validatable/or';
import MessageMap from '../../../dist/message/message/record/map';
import Type from '@alirya/type/validator/type-parameters';
import TypeClass from '@alirya/type/validator/type-parameters';
import TypeString from '@alirya/type/assert/string/type-parameters';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


describe('implicit complete', function() {

    describe('all valid', function() {

        let value = {
            user : 'user',
            name : 'name',
            address : 'address',
        };

        it(`and validation`, () => {

            let validator = {
                name : Type('string'),
                address : Type('string'),
                user : Type('string'),
            };

            let property = MapAll(validator, (v)=>And(v), MessageMap);

            let validatable = property(value);

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


            let validator = {
                name : Type('string'),
                address : Type('string'),
                user : Type('string'),
            };

            let property = MapAll(validator, (v)=>Or(v), MessageMap);

            let validatable = property(value);

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

        let value = {
            age : '11',
            name : 'name',
            address : 'address',
        };

        it(`and validation`, () => {

            let validator = {
                name : Type('string'),
                age : Type('number'),
                address : Type('string'),
            };

            let property = MapAll(validator, (v)=>And(v), MessageMap);

            let and = property(value);

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

            let validator = {
                name : Type('string'),
                age : Type('number'),
                address : Type('string'),
            };

            let property = MapAll(validator, (v)=>Or(v), MessageMap);

            let or = property(value);

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

        let value = {
            name : {},
            age : {},
            address : {},
        };

        it(`and validation`, () => {

            let validator = {
                name : Type('string'),
                age : Type('number'),
                address : Type('string'),
            };

            let property = MapAll(validator, (v)=>And(v), MessageMap);

            let and = property(value);

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

            let validator = {
                name : Type('string'),
                age : Type('number'),
                address : Type('string'),
            };

            let property = MapAll(validator, (v)=>Or(v), MessageMap);

            let or = property(value);
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


        let value = {
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


            let validator  = {
                name : TypeClass('string', TypeString),
                address : Type('string'),
                user : Type('string'),
                info : MapAll({
                    age : Type('number'),
                    hobby : Type('string'),
                    no : Type('number'),
                },(v)=>And(v), MessageMap) /*as ValidatorSimple<any, ArgSub, Value<any> & Validatable & Validatables<Infer<Sub>> & Message<ArgNsg>>*/
            };

            let property = MapAll(validator, (v)=>And(v), MessageMap);
            property(value).validatables.name;
            property(value).validatables.info;

            let validatable = property(value);

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

            let validator  = {
                name : TypeClass('string', TypeString),
                address : Type('string'),
                user : Type('string'),
                info : MapAll({
                    age : Type('number'),
                    hobby : Type('string'),
                    no : Type('number'),
                },(v)=>Or(v), MessageMap) /*as ValidatorSimple<any, ArgSub, Value<any> & Validatable & Validatables<Infer<Sub>> & Message<ArgNsg>>*/
            };

            let property = MapAll(validator, (v)=>Or(v), MessageMap);

            let validatable = property(value);

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

        let value = {
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

            let validator = {
                name : Type('string'),
                age : Type('number'),
                address : Type('string'),
                info : MapAll({
                    age : Type('number'),
                    hobby : Type('string'),
                    no : Type('number'),
                },(v)=>And(v), MessageMap)
            };

            let property = MapAll(validator, (v)=>And(v), MessageMap);


            let and = property(value);

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

            let validator = {
                name : Type('string'),
                age : Type('number'),
                address : Type('string'),
                info : MapAll({
                    age : Type('number'),
                    hobby : Type('string'),
                    no : Type('number'),
                },(v)=>Or(v), MessageMap)
            };

            let property = MapAll(validator, (v)=>Or(v), MessageMap);

            let or = property(value);

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

        let value = {
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

            let validator = {
                name : Type('string'),
                age : Type('number'),
                address : Type('string'),
                info : MapAll({
                    age : Type('number'),
                    hobby : Type('string'),
                    no : Type('number'),
                },(v)=>And(v), MessageMap)
            };

            let property = MapAll(validator, (v)=>And(v), MessageMap);

            let and = property(value);

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

            let validator = {
                name : Type('string'),
                age : Type('number'),
                address : Type('string'),
                info : MapAll({
                    age : Type('number'),
                    hobby : Type('string'),
                    no : Type('number'),
                },(v)=>Or(v), MessageMap)
            };

            let property = MapAll(validator, (v)=>Or(v), MessageMap);

            let or = property(value);
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


