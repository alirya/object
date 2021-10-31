import MapCallback from "../../../dist/validator/map-callback";
import ValidateMapPartial from "../../../dist/validator/validatable/record/map-partial";
import ValidateMap from "../../../dist/validator/validatable/record/map";
import And from "../../../dist/validatable/and";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatorInterface from "@dikac/t-validator/simple";
import Message from "@dikac/t-message/message";
import MessageMap from "../../../dist/message/message/record/map";
import Type from "@dikac/t-type/validator/type";
import Instance from "@dikac/t-validator/validatable/validatable";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let validator = {
    name : Type('string'),
    address : Type('string'),
};

type TypeValidator = {
    name : ValidatorInterface<any, string, Instance<any, string>>,
    address :ValidatorInterface<any, string, Instance<any, string>>,
};

type Type = {
    name : string,
    address : string,
}

let value = {
    name : 'name',
    address : 'address',
};

describe("implicit complete", function() {

    let property = MapCallback.Parameter(validator, ValidateMap.Parameter, And, MessageMap);

    let validatable = property(value);

    let unknown : unknown = validatable.value;

    let string : Type = validatable.value;

});

describe("explicit complete", function() {

    describe("auto", function() {

        let property = MapCallback.Parameter<globalThis.Record<keyof typeof validator, ValidatorInterface<string, string, Instance<string, string>>>>(validator,
            ValidateMap.Parameter,
            And,
            MessageMap
        );

        let validatable = property(value);

        let unknown : unknown = validatable.value;
        let record : Type = validatable.value;

    });

    describe("direct", function() {

        let property = MapCallback.Parameter<TypeValidator>(validator,
            ValidateMap.Parameter,
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        let validatable = property(value);

        let unknown : unknown = validatable.value;
        let record : Type = validatable.value;

    });
});

describe("implicit partial", function() {

    let property = MapCallback.Parameter(validator,
        (value, validators) =>
            <Record<PropertyKey, Instance<any, string>>>ValidateMapPartial.Parameter(value, validators),
        (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
        MessageMap
    );

    let validatable = property(value);

    let unknown : unknown = validatable.value;
    let val : Type = validatable.value;

});

describe("explicit complete", function() {

    describe("auto", function() {

        let property = MapCallback.Parameter<globalThis.Record<keyof typeof validator, ValidatorInterface<any, string, Instance<any, string>>>>(
            validator,
            (value, validators) =>
                <Record<PropertyKey, Instance<any, string>>>ValidateMapPartial.Parameter(value, validators),
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        let validatable = property(value);

        let unknown : unknown = validatable.value;
        let string : Type = validatable.value;

    });

    describe("direct", function() {

        let property = MapCallback.Parameter<TypeValidator>(
            validator,
            (value, validators) =>
                <Record<PropertyKey, Instance<any, string>>>ValidateMapPartial.Parameter(value, validators),
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            (v)=>MessageMap(<globalThis.Record<any, Message>>v)
        );

        let validatable = property(value);

        let unknown : unknown = validatable.value;
        let string : Type = validatable.value;

    });
});
