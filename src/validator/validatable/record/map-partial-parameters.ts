import RecordParameter from "../../subject/record/allow";
import Validator from "@dikac/t-validator/validator";
import InferReturn from "./infer";
import IteratorMap from "../iterator/map-parameters";

export default function MapPartialParameters<
    Validators extends Record<PropertyKey, Validator>
>(
    value : RecordParameter<Validators>,
    validators : Validators,
    stop = false,
) : Partial<InferReturn<Validators>> {

    let object = {};

    for(let [property, validatable] of IteratorMap(value, validators)) {

        object[<PropertyKey>property] = validatable;

        if(validatable.valid === stop) {

            return object;
        }
    }

    return object;
}
