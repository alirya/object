import RecordParameter from "../../base/record/infer";
import Validator from "@dikac/t-validator/validator";
import InferReturn from "./infer";
import IteratorMap from "../iterator/map";
import Value from "@dikac/t-value/value";
import ValidatorsContainer from "../../validators/validators";

export default function MapPartial<
    Validators extends Record<PropertyKey, Validator>
>(
    // values : RecordParameter<Validators>,
    // validators : Validators,
    {
        value,
        validators,
        stop = false,
    } : Value<RecordParameter<Validators>> & ValidatorsContainer<Validators> & {stop ?: boolean}
) : Partial<InferReturn<Validators>> {

    let object = {};

    for(let [property, validatable] of IteratorMap({value, validators})) {

        object[<PropertyKey>property] = validatable;

        if(validatable.valid === stop) {

            return object;
        }
    }

    return object;

    // for(let property in validators) {
    //
    //     const validator = validators[property];
    //     const value = values[property];
    //
    //     object[<PropertyKey>property] = validator(value);
    //
    //     if(!object[<PropertyKey>property].valid) {
    //
    //         return object;
    //     }
    // }
    //
    // return <InferReturn<Validators>> object;
}
