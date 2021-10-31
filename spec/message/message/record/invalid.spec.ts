import Type from "@dikac/t-type/validator/type";
import ValueAll from "../../../../dist/validator/value-all";
import ValueCallback from "../../../../dist/validator/value-callback";
import MapAll from "../../../../dist/validator/map-all";
import MapCallback from "../../../../dist/validator/map-callback";
import Value from "../../../../dist/validator/value-all";
import Map from "../../../../dist/validator/map-all";
import And from "../../../../dist/validatable/and";
import Invalid from "../../../../dist/message/message/record/invalid";
import MessageMap from "../../../../dist/message/message/record/map";
import ValidatorValidatable from "../../../../dist/validator/validatable/record/infer";
import ValidateMapPartial from "../../../../dist/validator/validatable/record/map-partial";
import ValidateValuePartial from "../../../../dist/validator/validatable/record/value-partial";
import Instance from "@dikac/t-validator/validatable/validatable";

it("force console log", () => {spyOn(console, 'log').and.callThrough();});


describe("value all", function() {

    let validator = {
        name: Type('string'),
        address: Type('string'),
        user: Type('string'),
        info: ValueAll.Parameter({
            age: Type('string'),
            hobby: Type('string'),
            no: Type('string'),
        }, (v) => And(v), Invalid)
    };
    let property = ValueAll.Parameter(validator, (v)=>And(v), Invalid);
});


describe("value partial", function() {

    let validator = {
        name: Type('string'),
        address: Type('string'),
        user: Type('string'),
        info:  Value.Parameter({
            age: Type('string'),
            hobby: Type('string'),
            no: Type('string'),
        }, (v) => And(v), Invalid)
    };
    let property =  Value.Parameter(validator, (v)=>And(v), Invalid);
});


describe("value callback", function() {

    let validator = {
        name : Type('string'),
        address : Type('string'),
        user : Type('string'),
        info : ValueCallback.Parameter({
                age : Type('string'),
                hobby : Type('string'),
                no : Type('string'),
            }, (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValuePartial.Parameter(value, validators),
            And,
            Invalid
        )
    };

    let property = ValueCallback.Parameter(validator,
        (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValuePartial.Parameter(value, validators),
        And,
        Invalid
    );
});


describe("value all", function() {

    let validator = {
        name: Type('string'),
        address: Type('string'),
        user: Type('string'),
        info: MapAll.Parameter({
            age: Type('string'),
            hobby: Type('string'),
            no: Type('string'),
        }, (v) => And(v), Invalid)
    };
    let property = MapAll.Parameter(validator, (v)=>And(v), Invalid);
});


describe("value partial", function() {

    let validator = {
        name: Type('string'),
        address: Type('string'),
        user: Type('string'),
        info: Map.Parameter({
            age: Type('string'),
            hobby: Type('string'),
            no: Type('string'),
        }, (v) => And(v), Invalid)
    };
    let property = Map.Parameter(validator, (v)=>And(v), Invalid);
});


describe("value callback", function() {

    let c =  MapCallback.Parameter({
            age : Type('number'),
            hobby : Type('string'),
            no : Type('number')
        },
        (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValidateMapPartial.Parameter(value, validators),
        And, MessageMap);

    let validator = {
        name : Type('string'),
        age : Type('number'),
        address : Type('string'),
        info : MapCallback.Parameter({
                age : Type('number'),
                hobby : Type('string'),
                no : Type('number')
            },
            (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValidateMapPartial.Parameter(value, validators),
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

    let property = MapCallback.Parameter(validator,
        (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValidateMapPartial.Parameter(value, validators),
        And,
        MessageMap
    );
});
