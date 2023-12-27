import {MapCallbackParameters} from '../../../dist/validator/map-callback.js';
import {MapPartialParameters} from '../../../dist/validator/validatable/record/map-partial.js';
import {MapParameters} from '../../../dist/validator/validatable/record/map.js';
import And from '../../../dist/validatable/and.js';
import Or from '../../../dist/validatable/or.js';
import MessageMap from '../../../dist/message/message/record/map.js';
import {TypeParameters} from '@axiona/type/validator/type.js';
import InferReturn from '../../../dist/validator/validatable/record/infer.js';
import {OmitParameters} from '../../../dist/omit.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('flat', function() {

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

        const property = MapCallbackParameters<typeof validator, InferReturn<typeof validator>>(validator, MapParameters, And, MessageMap);

        const validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toEqual(value);

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

        const property = MapCallbackParameters<typeof validator, InferReturn<typeof validator>>(validator, MapParameters, Or, MessageMap);

        const validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toEqual(value);

        expect(validatable.validatables.name.valid).toBe(true);
        expect(typeof validatable.validatables.name.message).toBe('string');

        expect(validatable.validatables.address.valid).toBe(true);
        expect(typeof validatable.validatables.address.message).toBe('string');

        expect(validatable.validatables.user.valid).toBe(true);
        expect(typeof validatable.validatables.user.message).toBe('string');
    });

});



describe('recursive', function() {

    const value = {
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

        const validator = {
            name : TypeParameters('string'),
            address : TypeParameters('string'),
            user : TypeParameters('string'),
            info : MapCallbackParameters({
                    age : TypeParameters('number'),
                    hobby : TypeParameters('string'),
                    no : TypeParameters('number')
                },
                (value, validators) => MapPartialParameters(value, validators),
                And, MessageMap)
        };

        const property = MapCallbackParameters(validator,
            (value, validators) => MapPartialParameters(value, validators),
            And,
            MessageMap
        );

        const validatable = property(value);

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

        // @ts-expect-error
        expect(validatable.validatables.info.valid).toBe(true);

        // @ts-expect-error
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

    });

    it(`or validation`, () => {


        const validator = {
            name : TypeParameters('string'),
            address : TypeParameters('string'),
            user : TypeParameters('string'),
            info : MapCallbackParameters({
                    age : TypeParameters('number'),
                    hobby : TypeParameters('string'),
                    no : TypeParameters('number')
                },
                (value, validators) => MapPartialParameters(value, validators),
                Or, MessageMap)
        };

        const property = MapCallbackParameters(validator,
            (value, validators) => MapPartialParameters(value, validators),
            Or,
            MessageMap
        );

        const validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(value);
        // expect(validatable.value).not.toBe(value);


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

        // @ts-expect-error
        expect(validatable.validatables.info.valid).toBe(true);
        // @ts-expect-error
        expect(validatable.validatables.info.value).toEqual(value.info);
        // expect(validatable.validatables.info.value).not.toBe(value.info);

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
    });

});


describe('extras', function() {

    const value = {
        user : 'user',
        name : 'name',
        address : 'address',
    };

    it(`and validation`, () => {

        const validator = {
            name : TypeParameters('string'),
            address : TypeParameters('string'),
        };

        const property = MapCallbackParameters<typeof validator, InferReturn<typeof validator>>(validator, MapParameters, And, MessageMap);

        const validatable = property(value);

        expect(validatable.valid).toBe(true);
        // expect<{name : string, address : string}>(validatable.value).toEqual(OmitParameters(value, 'user'));
        expect<{name : string, address : string}>(validatable.value).toEqual(value, );
    });

});

