import ValidatableRecord from "./infer";
import Validator from "@alirya/validator/validator";
import ValidatorsContainer from "../../validators/validators";
import Value from "@alirya/value/value";
import ValueParameters from "./value-parameters";

export default function ValueParameter<
    ValueType,
    Validators extends Record<PropertyKey, Validator<ValueType>>,
>(
    {
        value,
        validators
    } : ValidatorsContainer<Validators> & Value<ValueType>
) : ValidatableRecord<Validators> {

    return ValueParameters(value, validators);
}
