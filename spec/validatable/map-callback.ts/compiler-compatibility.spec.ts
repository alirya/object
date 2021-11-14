import ValidatorInterface from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/dynamic";
import MapCallback from "../../../dist/validatable/map-callback";
import ValidateMap from "../../../dist/validator/validatable/record/map";
import ValidatableInfer from "../../../dist/validator/validatable/record/infer";
import And from "../../../dist/validatable/and";
import MessageMap from "../../../dist/message/message/record/map";
import Validatable from "@dikac/t-validatable/validatable";
import Type from "@dikac/t-type/validator/type";

let validator = {
    name : Type.Parameters('string'),
    address : Type.Parameters('string'),
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

describe("implicit", function() {

    let validatable = new MapCallback.Parameters(value, validator, ValidateMap.Parameters, And, MessageMap);

    let unknown : unknown = validatable.value;

    let string : Type = validatable.value;

});

describe("explicit", function() {

    describe("auto", function() {

        let validatable = new MapCallback.Parameters<
            Type,
            TypeValidator,
            ValidatableInfer<TypeValidator>,
            Validatable,
            Type
        >(
            value,
            validator,
            ValidateMap.Parameters,
            And,
            result => MessageMap(result)
        );

        let unknown : unknown = validatable.value;
        let record : Type = validatable.value;

    });

});
