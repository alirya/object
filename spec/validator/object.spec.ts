import {ObjectParameters} from '../../dist/validator/object';
import ObjectMessage from '../../dist/assert/string/object';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validator = ObjectParameters(ObjectMessage.Parameters);
        let validatable = validator(<unknown>new Array());

        if(validatable.valid) {

            // compiler pass
            let object : object = validatable.value;
            expect(object).toEqual([]);

        } else {

            // @ts-expect-error
            let object : object = validatable.value;
            fail('validatable.valid should false');
        }
    });

    it(`invalid value`,function() {

        let validator = ObjectParameters(ObjectMessage.Parameters);
        let validatable = validator(1);

        if(validatable.valid) {

            // compiler pass
            let object : object = validatable.value;
            fail('validatable.valid should false');

        } else {

            // @ts-expect-error
            let object : object = validatable.value;
            // @ts-expect-error
            expect(object).toEqual(1);
        }
    });

    it(`readonly`,function() {

        let validator = ObjectParameters(ObjectMessage.Parameters);
        let validatable = validator({});

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
            validatable.message = 'message';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


it(`valid`,function() {

    let validator = ObjectParameters(ObjectMessage.Parameters);
    let validatable = validator({});

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toEqual({});
    expect(typeof validatable.message).toBe('string');

});

it(`invalid`,function() {

    let validator = ObjectParameters(ObjectMessage.Parameters);
    let validatable = validator('a');

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe('a');
    expect(typeof validatable.message).toBe('string');

});



