import ValidatorInterface from "@alirya/validator/simple";
import Instance from "@alirya/validator/validatable/validatable";
import RecordValueCallback from "../../../dist/validator/record-value-callback-parameters";
import ValidateValue from "../../../dist/validator/validatable/record/record-value-parameters";
import And from "../../../dist/validatable/and";
import MessageMap from "../../../dist/message/message/record/map";
import Validatable from "@alirya/validatable/validatable";
import ValidateValuePartial from "../../../dist/validator/validatable/record/record-value-partial-parameters";
import Message from "@alirya/message/message";
import Type from "@alirya/type/validator/type-parameters";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

type TypeValidatorValue = ValidatorInterface<unknown, string, Instance<unknown, string>>;

let validator = Type("string");

type Type = {
    name : string,
    address : string,
}

let value = {
    name : 'name',
    address : 'address',
};

describe("implicit", function() {

    let property = RecordValueCallback(validator, ValidateValue, And, (v)=>MessageMap(v));

    let validatable = property(value);

    if(validatable.valid) {

        let string : Type = validatable.value;

    } else {

        let unknown : unknown = validatable.value;
    }

});

describe("explicit complete", function() {

    describe("auto", function() {

        let property = RecordValueCallback<TypeValidatorValue>(validator,
            (value, validators) => ValidateValue(value, validators),
            (v)=>And(v),
            MessageMap
        );

        let validatable = property(value);

        let unknown : unknown = validatable.value;
        let record : Type = validatable.value;

    });

    describe("direct", function() {

        let property = RecordValueCallback<TypeValidatorValue>(validator,
            (value, validators) => ValidateValue(value, validators),
            (v)=>And(<globalThis.Record<any, Validatable>>v),
            MessageMap
        );

        let validatable = property(value);

        let unknown : unknown = validatable.value;
        let record : Type = validatable.value;

    });
});

describe("implicit partial", function() {

    let property = RecordValueCallback(validator,
        (value, validators) =>
            <Record<PropertyKey, Instance<any, string>>>ValidateValuePartial(value, validators),
        (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
        MessageMap
    );

    let validatable = property(value);

    let unknown : unknown = validatable.value;
    let val : Type = validatable.value;

});

describe("explicit complete", function() {

    describe("auto", function() {

        let property = RecordValueCallback<TypeValidatorValue>(
            validator,
            (value, validators) =>
                <Record<PropertyKey, Instance<any, string>>>ValidateValuePartial(value, validators),
            (v)=>And(<globalThis.Record<any, Validatable>>v),
            MessageMap
        );

        let validatable = property(value);

        let unknown : unknown = validatable.value;
        let string : Type = validatable.value;

    });

    describe("direct", function() {

        let property = RecordValueCallback<TypeValidatorValue>(
            validator,
            (value, validators) =>
                <Record<PropertyKey, Instance<any, string>>>ValidateValuePartial(value, validators),
            (v)=>And(<globalThis.Record<any, Validatable>>v),
            (v)=>MessageMap(<globalThis.Record<any, Message>>v)
        );

        let validatable = property(value);

        let unknown : unknown = validatable.value;
        let string : Type = validatable.value;

    });
});



