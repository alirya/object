import ValidatorInterface from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import RecordValueCallback from "../../../dist/validator/record-key-callback";
import ValidateKey from "../../../dist/validator/validatable/record/record-key";
import And from "../../../dist/validatable/and";
import MessageMap from "../../../dist/message/message/record/map";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import ValidateValuePartial from "../../../dist/validator/validatable/record/record-key-partial";
import Type from "@dikac/t-type/validator/type";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

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

        let property = RecordValueCallback.Parameter(validator, ValidateKey.Parameter, And, (v)=>MessageMap(v));

        let validatable = property(value);

        if(validatable.valid) {

            let string : Type = validatable.value;

        } else {

            let unknown : unknown = validatable.value;
        }

    });

    describe("explicit complete", function() {

        describe("auto", function() {

            let property = RecordValueCallback.Parameter<TypeValidatorValue>(validator,
                (value, validators) => ValidateKey.Parameter(value, validators),
                (v)=>And(v),
                (v)=>MessageMap(<globalThis.Record<any, ValidatorValidatable>>v)
            );

            let validatable = property(value);

            let unknown : unknown = validatable.value;
            let record : Type = validatable.value;

        });

        describe("direct", function() {

            let property = RecordValueCallback.Parameter<TypeValidatorValue>(validator,
                (value, validators) => ValidateKey.Parameter(value, validators),
                (v)=>And(<globalThis.Record<any, Validatable>>v),
                (v)=>MessageMap(<globalThis.Record<any, ValidatorValidatable>>v)
            );

            let validatable = property(value);

            let unknown : unknown = validatable.value;
            let record : Type = validatable.value;

        });
    });

    describe("implicit partial", function() {

        let property = RecordValueCallback.Parameter(validator,
            (value, validators) =>
                <Record<PropertyKey, Instance<any, string>>>ValidateValuePartial.Parameter(value, validators),
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        let validatable = property(value);

        let unknown : unknown = validatable.value;
        let val : Type = validatable.value;

    });

    describe("explicit complete", function() {

        describe("auto", function() {

            let property = RecordValueCallback.Parameter<TypeValidatorValue>(
                validator,
                (value, validators) =>
                    <Record<PropertyKey, Instance<any, string>>>ValidateValuePartial.Parameter(value, validators),
                (v)=>And(<globalThis.Record<any, ValidatorValidatable>>v),
                (v)=>MessageMap(<globalThis.Record<any, ValidatorValidatable>>v)
            );

            let validatable = property(value);

            let unknown : unknown = validatable.value;
            let string : Type = validatable.value;

        });

        describe("direct", function() {

            let property = RecordValueCallback.Parameter<TypeValidatorValue>(
                validator,
                (value, validators) =>
                    <Record<PropertyKey, Instance<any, string>>>ValidateValuePartial.Parameter(value, validators),
                (v)=>And(<globalThis.Record<any, ValidatorValidatable>>v),
                (v)=>MessageMap(<globalThis.Record<any, ValidatorValidatable>>v)
            );

            let validatable = property(value);

            let unknown : unknown = validatable.value;
            let string : Type = validatable.value;

        });
    });
});
