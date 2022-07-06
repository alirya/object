import {MapCallbackParameters} from '../../../dist/validator/map-callback.js';
import {MapPartialParameters} from '../../../dist/validator/validatable/record/map-partial.js';
import And from '../../../dist/validatable/and.js';
import Or from '../../../dist/validatable/or.js';
import Validatable from '@alirya/validatable/validatable.js';
import MessageMap from '../../../dist/message/message/record/map.js';
import {TypeParameters} from '@alirya/type/validator/type.js';
import Instance from '@alirya/validator/validatable/validatable.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('flat', function() {

    let value = {
        name : 'name',
        age : '15',
        address : 'address',
    };


    it(`and validation`, () => {

        let validator = {
            name : TypeParameters('string'),
            age : TypeParameters('number'),
            address : TypeParameters('string'),
        };

        let property = MapCallbackParameters(validator,
            (value, validators) => <Record<PropertyKey, Instance<any, string>>>MapPartialParameters(value, validators),
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        let and = property(value);

        expect(and.valid).toBe(false);

        expect(and.value).toEqual(value);

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

        let validator = {
            name : TypeParameters('string'),
            age : TypeParameters('number'),
            address : TypeParameters('string'),
        };

        let property = MapCallbackParameters(validator,
            (value, validators) => <Record<PropertyKey, Instance<any, string>>>MapPartialParameters(value, validators),
            (v)=>Or(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        let or = property(value);
        expect(or.value).toEqual(value);

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



describe('recursive', function() {

    let value = {
        name : 'name',
        age : '15',
        address : 'address',
        info : {
            age : 5,
            hobby : 'string',
            no : 6,
        }
    };

    it(`and validation`, () => {

        let validator = {
            name : TypeParameters('string'),
            age : TypeParameters('number'),
            address : TypeParameters('string'),
            info : MapCallbackParameters({
                    age : TypeParameters('number'),
                    hobby : TypeParameters('string'),
                    no : TypeParameters('number')
                },
                (value, validators) => <Record<PropertyKey, Instance<any, string>>>MapPartialParameters(value, validators),
                (v)=>And(v), MessageMap)
        };

        let property = MapCallbackParameters(validator,
            (value, validators) => <Record<PropertyKey, Instance<any, string>>>MapPartialParameters(value, validators),
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        let and = property(value);

        expect(and.valid).toBe(false);
        expect(and.value).not.toBe(value);

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

        expect(and.validatables.info).toBe(<any>undefined);
    });


    it(`or validation `, () => {

        let validator = {
            name : TypeParameters('string'),
            age : TypeParameters('number'),
            address : TypeParameters('string'),
            info : MapCallbackParameters({
                    age : TypeParameters('number'),
                    hobby : TypeParameters('string'),
                    no : TypeParameters('number')
                },
                (value, validators) => <Record<PropertyKey, Instance<any, string>>>MapPartialParameters(value, validators),
                (v)=>Or(v), MessageMap)
        };

        let property = MapCallbackParameters(validator,
            (value, validators) => <Record<PropertyKey, Instance<any, string>>>MapPartialParameters(value, validators),
            (v)=>Or(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        let or = property(value);
        expect(or.value).not.toBe(value);
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

        expect(or.validatables.info).toBe(<any>undefined);

    });

});

