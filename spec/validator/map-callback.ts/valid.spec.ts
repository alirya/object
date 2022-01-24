import MapCallback from '../../../dist/validator/map-callback-parameters';
import ValidateMapPartial from '../../../dist/validator/validatable/record/map-partial-parameters';
import ValidateMap from '../../../dist/validator/validatable/record/map-parameters';
import And from '../../../dist/validatable/and';
import Or from '../../../dist/validatable/or';
import MessageMap from '../../../dist/message/message/record/map';
import Type from '@alirya/type/validator/type-parameters';
import MapCallbackFunction from '../../../dist/validator/map-callback-parameters';
import InferReturn from '../../../dist/validator/validatable/record/infer';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('flat', function() {

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

        let property = MapCallback<typeof validator, InferReturn<typeof validator>>(validator, ValidateMap, And, MessageMap);

        let validatable = property(value);

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

        let validator = {
            name : Type('string'),
            address : Type('string'),
            user : Type('string'),
        };

        let property = MapCallback<typeof validator, InferReturn<typeof validator>>(validator, ValidateMap, Or, MessageMap);

        let validatable = property(value);

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
            info : MapCallbackFunction({
                    age : Type('number'),
                    hobby : Type('string'),
                    no : Type('number')
                },
                (value, validators) => ValidateMapPartial(value, validators),
                And, MessageMap)
        };

        let property = MapCallback(validator,
            (value, validators) => ValidateMapPartial(value, validators),
            And,
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


        let validator = {
            name : Type('string'),
            address : Type('string'),
            user : Type('string'),
            info : MapCallbackFunction({
                    age : Type('number'),
                    hobby : Type('string'),
                    no : Type('number')
                },
                (value, validators) => ValidateMapPartial(value, validators),
                Or, MessageMap)
        };

        let property = MapCallback(validator,
            (value, validators) => ValidateMapPartial(value, validators),
            Or,
            MessageMap
        );

        let validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).not.toBe(value);


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
        expect(validatable.validatables.info.value).not.toBe(value.info);

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

