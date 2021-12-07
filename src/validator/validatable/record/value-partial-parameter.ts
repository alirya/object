import ValidatableRecord from "./infer";
import Validator from "@dikac/t-validator/validator";
import ValidatorsContainer from "../../validators/validators";
import Value from "@dikac/t-value/value";
import ValuePartialParameters from "./value-partial-parameters";


export default function ValuePartialParameter<
    ValueType,
    Validators extends Record<PropertyKey, Validator<ValueType>>,
>(
    {
        value,
        validators,
        stop = false,
    } : Value<ValueType> & ValidatorsContainer<Validators> & {stop ?: boolean}
) : Partial<ValidatableRecord<Validators>> {

    return ValuePartialParameters(value, validators, stop);
}
