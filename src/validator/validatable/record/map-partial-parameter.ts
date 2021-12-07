import RecordParameter from "../../subject/record/allow";
import Validator from "@dikac/t-validator/validator";
import InferReturn from "./infer";
import Value from "@dikac/t-value/value";
import ValidatorsContainer from "../../validators/validators";
import MapPartialParameters from "./map-partial-parameters";

export default function MapPartialParameter<
    Validators extends Record<PropertyKey, Validator>
>(
    {
        value,
        validators,
        stop = false,
    } : Value<RecordParameter<Validators>> & ValidatorsContainer<Validators> & {stop ?: boolean}
) : Partial<InferReturn<Validators>> {

    return MapPartialParameters(value, validators, stop);
}
