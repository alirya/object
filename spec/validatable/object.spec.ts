import Validator from '../../dist/validatable/object.js';
import ObjectMessage from '../../dist/assert/string/object.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        const validatable = Validator.Parameters(<unknown>{}, ObjectMessage.Parameters);

        if(validatable.valid) {

            const object : object = validatable.value;
            expect(object).toEqual({});

        } else {

            // @ts-expect-error
            const object : object = validatable.value;
            fail('validatable.valid should false');
        }
    });

    it(`invalid value`,function() {

        const validatable = Validator.Parameters(<unknown>1, ObjectMessage.Parameters);

        if(validatable.valid) {

            // compiler pass
            const object : object = validatable.value;
            fail('validatable.valid should false');

        } else {

            // @ts-expect-error
            const object : object = validatable.value;
            // @ts-expect-error
            expect(object).toEqual(1);
        }
    });

    it(`readonly`,function() {

        const validatable = Validator.Parameters(<unknown>{}, ObjectMessage.Parameters);

        try {
            // @ts-expect-error
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        // @ts-expect-error
        validatable.value = true;

        try {
            // @ts-expect-error
            validatable.message.js = 'message.js';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


it(`valid`,function() {

    const validatable = Validator.Parameters({}, ObjectMessage.Parameters);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toEqual({});
    expect(typeof validatable.message).toBe('string');

});

it(`invalid`,function() {

    const validatable = Validator.Parameters('a', ObjectMessage.Parameters);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe('a');
    expect(typeof validatable.message).toBe('string');
});



