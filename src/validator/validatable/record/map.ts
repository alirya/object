import RecordParameter from "../../base/record/infer";
import ValidatorsContainer from "../../validators/validators";
import Validator from "@dikac/t-validator/validator";
import InferReturn from "./infer";
import IteratorMap from "../iterator/map";
import Value from "@dikac/t-value/value";


export default Map;
namespace Map {
    export const Parameter = MapParameter;
    export const Object = MapObject;
}

export function MapParameter<
    Validators extends Record<PropertyKey, Validator>
>(
    value : RecordParameter<Validators>,
    validators : Validators,
    // {
    //     value,
    //     validators
    // } : Value<RecordParameter<Validators>> & ValidatorsContainer<Validators>
) : InferReturn<Validators> {

    let object = {};

    for(let [property, validatable] of IteratorMap.Parameter(value, validators)) {

        object[<PropertyKey>property] = validatable;
    }

    return <InferReturn<Validators>> object;
}

export function MapObject<
    Validators extends Record<PropertyKey, Validator>
>(
    //values : RecordParameter<Validators>,
    //validators : Validators,
    {
        value,
        validators
    } : Value<RecordParameter<Validators>> & ValidatorsContainer<Validators>
) : InferReturn<Validators> {

    return MapParameter(value, validators);
}
