import RecordParameter from "../../base/record/infer";
import ValidatorsContainer from "../../validators/validators";
import Validator from "@dikac/t-validator/validator";
import InferReturn from "./infer";
import IteratorMap from "../iterator/map";
import Value from "@dikac/t-value/value";

export default function Map<
    Validators extends Record<PropertyKey, Validator>
>(
    //values : RecordParameter<Validators>,
    //validators : Validators,
    {
        value,
        validators
    } : Value<RecordParameter<Validators>> & ValidatorsContainer<Validators>
) : InferReturn<Validators> {

    let object = {};

    for(let [property, validatable] of IteratorMap({value, validators})) {

        object[<PropertyKey>property] = validatable;
    }

    return <InferReturn<Validators>> object;
}
