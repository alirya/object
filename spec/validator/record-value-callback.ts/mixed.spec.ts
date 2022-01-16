import Type from "@alirya/type/validator/type-parameters";
import RecordValueCallback from "../../../dist/validator/record-value-callback-parameters";
import ValidateValue from "../../../dist/validator/validatable/record/record-value-parameters";
import And from "../../../dist/validatable/and";
import MessageMap from "../../../dist/message/message/record/map";
import Or from "../../../dist/validatable/or";
import Infer from "@alirya/validator/validatable/infer-static";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("flat", function() {

    let validator = Type('string');

    let value = {
        name : 'string',
        age : 1,
        address : 'string',
    };

    it(`and validation`, () => {

        let property = RecordValueCallback<typeof validator, Record<PropertyKey, Infer<typeof validator>>>(validator, ValidateValue, And, MessageMap);

        let and = property(value);

        expect<boolean>(and.valid).toBe(false);

        expect(and.validatables.name.valid).toBe(true);
        expect(typeof and.validatables.name.message).toBe('string');

        expect(and.validatables.age.valid).toBe(false);
        expect(typeof and.validatables.age.message).toBe('string');

        expect(and.validatables.address.valid).toBe(true);
        expect(typeof and.validatables.address.message).toBe('string');

        expect(and.value).toBe(value);
    });


    it(`or validation `, () => {

        let property = RecordValueCallback<typeof validator, Record<PropertyKey, Infer<typeof validator>>>(validator, ValidateValue, Or, MessageMap);

        let or = property(value);

        expect(or.valid).toBe(true);
        expect(or.value).toBe(value);

        expect(typeof or.validatables.name.message).toBe('string');
        expect(or.validatables.name.valid).toBe(true);

        expect(typeof or.validatables.age.message).toBe('string');
        expect(or.validatables.age.valid).toBe(false);

        expect(typeof or.validatables.address.message).toBe('string');
        expect(or.validatables.address.valid).toBe(true);

    });
});

