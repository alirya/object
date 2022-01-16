import RecordParameter from "../../subject/record/allow";
import ValidatorsContainer from "../../validators/validators";
import Validator from "@alirya/validator/validator";
import InferReturn from "./infer";
import Value from "@alirya/value/value";
import MapParameters from "./map-parameters";


export default function MapParameter<
    Validators extends Record<PropertyKey, Validator>
>(
    {
        value,
        validators
    } : Value<RecordParameter<Validators>> & ValidatorsContainer<Validators>
) : InferReturn<Validators> {

    return MapParameters(value, validators);
}
