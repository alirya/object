import Type from "@dikac/t-type/validator/type";
import ValueCallback from "../../../dist/validator/value-callback";
import ValidateValue from "../../../dist/validator/validatable/record/value";
import And from "../../../dist/validatable/and";
import MessageMap from "../../../dist/message/message/record/map";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatablesInterface from "../../../dist/validatable/validatables/validatables";
import Validatables from "../../../dist/validatable/validatables";
import ValidatorValidatable from "../../../dist/validator/validatable/record/infer";
import ValidateValuePartial from "../../../dist/validator/validatable/record/value-partial";
import Message from "@dikac/t-message/message";
import Infer from "../../../dist/validator/validatable/record/infer";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});



let validator = {
    name : Type.Parameters('string'),
    address : Type.Parameters('string'),
};

type Messages = {
    name : string,
    address : string,
}

describe("implicit complete", function() {

    let property = ValueCallback.Parameters<any, string, Messages, typeof validator, Infer<typeof validator>>(validator, ValidateValue.Parameters, And, result => MessageMap(result));

    let validatable = property('data');

    describe("implicit complete", function() {

        let key : Validatable = validatable.validatables.name;
        key = validatable.validatables.address;

        let validatables : ValidatablesInterface = validatable;

        let record : Record<PropertyKey, Validatable> = validatable.validatables;

        // @ts-expect-error
        let and : Validatables = validatable.validatables;

        if(validatable.valid) {

            let unknown : unknown = validatable.value;
            let string : string = validatable.value;

        } else {

            let unknown : unknown = validatable.value;
            let string : string = validatable.value;
        }
    });
});

describe("explicit complete", function() {

    let property = ValueCallback.Parameters<string>(validator,
        (value, validators) => ValidateValue.Parameters(value, validators),
        (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
        MessageMap
    );

    let validatable = property('data');

    if(validatable.valid) {

        let unknown : unknown = validatable.value;
        let string : string = validatable.value;

    } else {

        let unknown : unknown = validatable.value;
        let string : string = validatable.value;
    }

});

describe("implicit partial", function() {

    let property = ValueCallback.Parameters(validator,
        (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValuePartial.Parameters(value, validators),
        (v)=>And(<Record<PropertyKey, Validatable>>v),
        MessageMap
    );

    let validatable = property('data');

    if(validatable.valid) {

        let unknown : unknown = validatable.value;
        let string : string = validatable.value;

    } else {

        let unknown : unknown = validatable.value;
        let string : string = validatable.value;
    }
});

describe("explicit complete", function() {

    let property = ValueCallback.Parameters<unknown, string>(validator,
        (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValuePartial.Parameters(value, validators),
        (v)=>And(<Record<PropertyKey, Validatable>>v),
        (v) => MessageMap(<Record<PropertyKey, Message>>v)
    );

    let validatable = property('data');

    if(validatable.valid) {

        let unknown : unknown = validatable.value;
        let string : string = validatable.value;

    } else {

        let unknown : unknown = validatable.value;
        let string : string = validatable.value;
    }

});

