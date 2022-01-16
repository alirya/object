import Map from '../../../dist/validator/map-partial-parameters';
import And from '../../../dist/validatable/and';
import Or from '../../../dist/validatable/or';
import Validatable from '@alirya/validatable/validatable';
import MessageMap from '../../../dist/message/message/record/map';
import Type from '@alirya/type/validator/type-parameters';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('flat', function() {

    let value = {
        name : 'name',
        address : 'age',
        user : 'address',
    };

    it(`and validation`, () => {

        let validator = {
            name : Type('string'),
            address : Type('string'),
            user : Type('string'),
        };

        let property = Map(validator,
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
            name : Type('string'),
            address : Type('string'),
            user : Type('string'),
        };

        let property = Map(validator,
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




describe('recursive', function() {


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
            name : Type('string'),
            address : Type('string'),
            user : Type('string'),
            info : Map({
                age : Type('number'),
                hobby : Type('string'),
                no : Type('number'),
            },(v)=>And(v), MessageMap)
        };

        let property = Map(validator,
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

            // @ts-expecerror
            expect(validatable.validatables.info.validatables.age.valid).toBe(true);
            // @ts-expecerror
            expect(typeof validatable.validatables.info.validatables.age.message).toBe('string');

            // @ts-expecerror
            expect(validatable.validatables.info.validatables.hobby.valid).toBe(true);
            // @ts-expecerror
            expect(typeof validatable.validatables.info.validatables.hobby.message).toBe('string');

            // @ts-expecerror
            expect(validatable.validatables.info.validatables.no.valid).toBe(true);
            // @ts-expecerror
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
            info : Map({
                age : Type('number'),
                hobby : Type('string'),
                no : Type('number'),
            },(v)=>Or(v), MessageMap)
        };

        let property = Map(validator,
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

            // @ts-expecerror
            expect(validatable.validatables.info.validatables.age.valid).toBe(true);
            // @ts-expecerror
            expect(typeof validatable.validatables.info.validatables.age.message).toBe('string');

            // @ts-expecerror
            expect(validatable.validatables.info.validatables.hobby.valid).toBe(true);
            // @ts-expecerror
            expect(typeof validatable.validatables.info.validatables.hobby.message).toBe('string');

            // @ts-expecerror
            expect(validatable.validatables.info.validatables.no.valid).toBe(true);
            // @ts-expecerror
            expect(typeof validatable.validatables.info.validatables.no.message).toBe('string');

        } else {

            fail('validatable.validatables.info should exist');
        }

    });

});

