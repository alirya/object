import Type from "@dikac/t-type/validator/type-parameters";
import RecordValueCallback from "../../../dist/validator/record-key-callback-parameters";
import ValidateKey from "../../../dist/validator/validatable/record/record-key-parameters";
import And from "../../../dist/validatable/and";
import MessageMap from "../../../dist/message/message/record/map";
import Or from "../../../dist/validatable/or";
import Infer from "@dikac/t-validator/validatable/infer-static";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let validator = Type('string');

let value = {
    name : 'string',
    address : 'string',
    user : 'string',
};

it(`and validation`, () => {

    let property = RecordValueCallback<typeof validator, Record<PropertyKey, Infer<typeof validator>>>(validator, ValidateKey, And, MessageMap);

    let validatable = property(value);

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


    let property = RecordValueCallback<typeof validator, Record<PropertyKey, Infer<typeof validator>>>(validator, ValidateKey, Or, MessageMap);

    let validatable = property(value);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe(value);

    expect(validatable.validatables.name.valid).toBe(true);
    expect(typeof validatable.validatables.name.message).toBe('string');

    expect(validatable.validatables.address.valid).toBe(true);
    expect(typeof validatable.validatables.address.message).toBe('string');

    expect(validatable.validatables.user.valid).toBe(true);
    expect(typeof validatable.validatables.user.message).toBe('string');
});
