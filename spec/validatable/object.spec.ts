import Validator from "../../dist/validatable/object";
import ObjectMessage from "../../dist/assert/string/object";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validatable = Validator.Parameter(<unknown>{}, ObjectMessage.Object);

        if(validatable.valid) {

            let object : object = validatable.value;
            expect(object).toEqual({});

        } else {

            // @ts-expect-error
            let object : object = validatable.value;
            fail('validatable.valid should false')
        }
    });

    it(`invalid value`,function() {

        let validatable = Validator.Parameter(<unknown>1, ObjectMessage.Object);

        if(validatable.valid) {

            // compiler pass
            let object : object = validatable.value;
            fail('validatable.valid should false')

        } else {

            // @ts-expect-error
            let object : object = validatable.value;
            // @ts-expect-error
            expect(object).toEqual(1);
        }
    });

    it(`readonly`,function() {

        let validatable = Validator.Parameter(<unknown>{}, ObjectMessage.Object);

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

    let validatable = Validator.Parameter({}, ObjectMessage.Object);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toEqual({});
    expect(typeof validatable.message).toBe("string");

});

it(`invalid`,function() {

    let validatable = Validator.Parameter('a', ObjectMessage.Object);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe('a');
    expect(typeof validatable.message).toBe("string");
});



