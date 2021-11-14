import Type from "@dikac/t-type/validator/type";
import ValueAll from "../../../../dist/validator/value-all";
import ValueCallback from "../../../../dist/validator/value-callback";
import MapAll from "../../../../dist/validator/map-all";
import MapCallback from "../../../../dist/validator/map-callback";
import Value from "../../../../dist/validator/value-all";
import Map from "../../../../dist/validator/map-all";
import And from "../../../../dist/validatable/and";
import Valid from "../../../../dist/message/message/record/valid";
import MessageMap from "../../../../dist/message/message/record/map";
import ValidatorValidatable from "../../../../dist/validator/validatable/record/infer";
import ValidateValuePartial from "../../../../dist/validator/validatable/record/value-partial";
import Instance from "@dikac/t-validator/validatable/dynamic";

it("force console log", () => {spyOn(console, 'log').and.callThrough();});


describe("value all", function() {

    let validator = {
        name: Type.Parameters('string'),
        address: Type.Parameters('string'),
        user: Type.Parameters('string'),
        info: ValueAll.Parameters({
            age: Type.Parameters('string'),
            hobby: Type.Parameters('string'),
            no: Type.Parameters('string'),
        }, (v) => And(v), Valid)
    };
    let property = ValueAll.Parameters(validator, (v)=>And(v), Valid);
});


describe("value partial", function() {

    let validator = {
        name: Type.Parameters('string'),
        address: Type.Parameters('string'),
        user: Type.Parameters('string'),
        info: Value.Parameters({
            age: Type.Parameters('string'),
            hobby: Type.Parameters('string'),
            no: Type.Parameters('string'),
        }, (v) => And(v), Valid)
    };
    let property = Value.Parameters(validator, (v)=>And(v), Valid);
});


describe("value callback", function() {

    let validator = {
        name : Type.Parameters('string'),
        address : Type.Parameters('string'),
        user : Type.Parameters('string'),
        info : ValueCallback.Parameters({
                age : Type.Parameters('string'),
                hobby : Type.Parameters('string'),
                no : Type.Parameters('string'),
            }, (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValuePartial.Parameters(value, validators),
            And,
            Valid
        )
    };

    let property = ValueCallback.Parameters(validator,
        (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValuePartial.Parameters(value, validators),
        And,
        Valid
    );
});


describe("value all", function() {

    let validator = {
        name: Type.Parameters('string'),
        address: Type.Parameters('string'),
        user: Type.Parameters('string'),
        info: MapAll.Parameters({
            age: Type.Parameters('string'),
            hobby: Type.Parameters('string'),
            no: Type.Parameters('string'),
        }, (v) => And(v), Valid)
    };
    let property = MapAll.Parameters(validator, (v)=>And(v), Valid);
});


describe("value partial", function() {

    let validator = {
        name: Type.Parameters('string'),
        address: Type.Parameters('string'),
        user: Type.Parameters('string'),
        info: Map.Parameters({
            age: Type.Parameters('string'),
            hobby: Type.Parameters('string'),
            no: Type.Parameters('string'),
        }, (v) => And(v), Valid)
    };
    let property = Map.Parameters(validator, (v)=>And(v), Valid);
});


describe("value callback", function() {

    let validator = {
        name : Type.Parameters('string'),
        age : Type.Parameters('number'),
        address : Type.Parameters('string'),
        info : MapCallback.Parameters({
                age : Type.Parameters('number'),
                hobby : Type.Parameters('string'),
                no : Type.Parameters('number')
            },
            (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValidateValuePartial.Parameters(value, validators),
            And, MessageMap)
    };

    let value = {
        name : 'name',
        age : "15",
        address : 'address',
        info : {
            age : 5,
            hobby : 'string',
            no : 6,
        }
    };

    let property = MapCallback.Parameters(validator,
        (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValidateValuePartial.Parameters(value, validators),
        And,
        MessageMap
    );
});
