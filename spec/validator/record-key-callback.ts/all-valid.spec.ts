import Type from "@dikac/t-type/validator/type";
import RecordValueCallback from "../../../dist/validator/record-key-callback";
import ValidateKey from "../../../dist/validator/validatable/record/record-key";
import And from "../../../dist/validatable/and";
import MessageMap from "../../../dist/message/message/record/map";
import Or from "../../../dist/validatable/or";
import Infer from "@dikac/t-validator/validatable/infer-unambiguous";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let validator = Type('string');

let value = {
    name : 'string',
    address : 'string',
    user : 'string',
};

it(`and validation`, () => {

    let property = RecordValueCallback.Parameter<typeof validator, Record<PropertyKey, Infer<typeof validator>>>(validator, ValidateKey.Parameter, And, MessageMap);

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


    let property = RecordValueCallback.Parameter<typeof validator, Record<PropertyKey, Infer<typeof validator>>>(validator, ValidateKey.Parameter, Or, MessageMap);

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
