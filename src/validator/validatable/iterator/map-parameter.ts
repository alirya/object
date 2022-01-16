import RecordParameter from "../../subject/record/allow";
import ValidatorsContainer from "../../validators/validators";
import Validator from "@alirya/validator/validator";
import Value from "@alirya/value/value";
import InferReturn from "@alirya/validator/validatable/infer-static";
import MapParameters from "./map-parameters";

export default function * MapParameter<
    Validators extends Record<PropertyKey, Validator>
>(
    {
        value,
        validators
    } : Value<RecordParameter<Validators>> & ValidatorsContainer<Validators>
) : Iterable<[keyof Validators, InferReturn<Validators[keyof Validators]>]> {

    return MapParameters(value, validators);
}
