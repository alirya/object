import Callbacks from "@dikac/t-validator/callback";
import RecordValueCallback from "../../../dist/validator/record-key-callback";
import ValidateKey from "../../../dist/validator/validatable/record/record-key";
import And from "../../../dist/validatable/and";
import MessageMap from "../../../dist/message/message/record/map";
import Or from "../../../dist/validatable/or";
import Infer from "@dikac/t-validator/validatable/infer-unambiguous";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let validator = Callbacks.Parameter<string, string>(function (value) {
    return ! ['name', 'age', 'address'].includes(value);
},function (result){
    return result.value + ' ' + (result.valid ? 'valid' : 'true');
}, );

let value = {
    name : 'string',
    age : 1,
    address : 'string',
};

it(`and validation`, () => {

    let property = RecordValueCallback.Parameter<typeof validator, Record<PropertyKey, Infer<typeof validator>>>(validator, ValidateKey.Parameter, And, MessageMap);

    let and = property(value);

    expect<boolean>(and.valid).toBe(false);
    expect(and.value).toEqual(value);

    expect(and.validatables.name.valid).toBe(false);
    expect(and.validatables.name.message).toBe('name true');

    expect(and.validatables.age.valid).toBe(false);
    expect(and.validatables.age.message).toBe('age true');

    expect(and.validatables.address.valid).toBe(false);
    expect(and.validatables.address.message).toBe('address true');
});

it(`or validation `, () => {

    let property = RecordValueCallback.Parameter<typeof validator, Record<PropertyKey, Infer<typeof validator>>>(validator, ValidateKey.Parameter, Or, MessageMap);

    let or = property(value);
    expect<boolean>(or.valid).toBe(false);
    expect(or.value).toEqual(value);

    expect(or.validatables.name.message).toBe('name true');
    expect(or.validatables.name.valid).toBe(false);

    expect(or.validatables.age.message).toBe('age true');
    expect(or.validatables.age.valid).toBe(false);

    expect(or.validatables.address.message).toBe('address true');
    expect(or.validatables.address.valid).toBe(false);
});
