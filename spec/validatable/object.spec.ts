import Validator from "../../dist/validatable/objecparameters";
import ObjectMessage from "../../dist/assert/string/objecparameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validatable = Validator(<unknown>{}, ObjectMessage);

        if(validatable.valid) {

            let object : object = validatable.value;
            expect(object).toEqual({});

        } else {

            // @ts-expecerror
            let object : object = validatable.value;
            fail('validatable.valid should false')
        }
    });

    it(`invalid value`,function() {

        let validatable = Validator(<unknown>1, ObjectMessage);

        if(validatable.valid) {

            // compiler pass
            let object : object = validatable.value;
            fail('validatable.valid should false')

        } else {

            // @ts-expecerror
            let object : object = validatable.value;
            // @ts-expecerror
            expect(object).toEqual(1);
        }
    });

    it(`readonly`,function() {

        let validatable = Validator(<unknown>{}, ObjectMessage);

        try {
            // @ts-expecerror
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        // @ts-expecerror
        validatable.value = true;

        try {
            // @ts-expecerror
            validatable.message = 'message';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


it(`valid`,function() {

    let validatable = Validator({}, ObjectMessage);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toEqual({});
    expect(typeof validatable.message).toBe("string");

});

it(`invalid`,function() {

    let validatable = Validator('a', ObjectMessage);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe('a');
    expect(typeof validatable.message).toBe("string");
});



