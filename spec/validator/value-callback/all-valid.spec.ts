import {TypeParameters} from '@axiona/type/validator/type.js';
import {ValueCallbackParameters} from '../../../dist/validator/value-callback.js';
import {ValueParameters} from '../../../dist/validator/validatable/record/value.js';
import And from '../../../dist/validatable/and.js';
import MessageMap from '../../../dist/message/message/record/map.js';
import Or from '../../../dist/validatable/or.js';
import ValidatorValidatable from '../../../dist/validator/validatable/record/infer.js';
import {ValuePartialParameters} from '../../../dist/validator/validatable/record/value-partial.js';
import Validatable from '@axiona/validatable/validatable.js';
import Infer from '../../../dist/validator/validatable/record/infer.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('flat', function() {

    type Messages = {
        name : string,
        address : string,
        user : string,
    };

    const validator = {
        name : TypeParameters('string'),
        address : TypeParameters('string'),
        user : TypeParameters('string'),
    };

    const value = 'data';

    it(`and validation`, () => {

        const property = ValueCallbackParameters<any, string, Messages, typeof validator, Infer<typeof validator>>(validator, ValueParameters, And, result => MessageMap(result));

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

        const property = ValueCallbackParameters<any, string, Messages, typeof validator, Infer<typeof validator>>(validator, ValueParameters, Or, result => MessageMap(result));

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


describe('recursive', function() {

    const value = 'data';

    it(`and validation`, () => {

        const validator = {
            name : TypeParameters('string'),
            address : TypeParameters('string'),
            user : TypeParameters('string'),
            info : ValueCallbackParameters({
                    age : TypeParameters('string'),
                    hobby : TypeParameters('string'),
                    no : TypeParameters('string'),
                }, (value, validators) => <ValidatorValidatable<typeof validator>>ValuePartialParameters(value, validators),
                (v)=>And(v),
                MessageMap)
        };

        const property = ValueCallbackParameters(validator,
            (value, validators) => <ValidatorValidatable<typeof validator>>ValuePartialParameters(value, validators),
            (v)=>And(<Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        const validatable = property(value);

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

        if(validatable.validatables.info) {

            expect(validatable.validatables.info.valid).toBe(true);
            expect(validatable.validatables.info.value).toBe('data');

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

        } else {

            fail('validatable.validatables.info should exist');
        }

    });


    it(`or validation`, () => {


        const validator = {
            name : TypeParameters('string'),
            address : TypeParameters('string'),
            user : TypeParameters('string'),
            info : ValueCallbackParameters({
                    age : TypeParameters('string'),
                    hobby : TypeParameters('string'),
                    no : TypeParameters('string'),
                }, (value, validators) => <ValidatorValidatable<typeof validator>>ValuePartialParameters(value, validators),
                (v)=>Or(v),
                MessageMap)
        };


        const property = ValueCallbackParameters(validator,
            (value, validators) => <ValidatorValidatable<typeof validator>>ValuePartialParameters(value, validators),
            (v)=>Or(<Record<PropertyKey, Validatable>>v),
            MessageMap
        );


        const validatable = property(value);

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

        if(validatable.validatables.info) {

            expect(validatable.validatables.info.valid).toBe(true);
            expect(validatable.validatables.info.value).toBe('data');

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

        } else {

            fail('validatable.validatables.info should exist');
        }
    });
});
