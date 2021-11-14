import ValidatableRecord from "./infer";
import Validator from "@dikac/t-validator/validator";
import ValidatorsContainer from "../../validators/validators";
import Value from "@dikac/t-value/value";
export default function ValuePartialParameter<ValueType, Validators extends Record<PropertyKey, Validator<ValueType>>>({ value, validators, stop, }: Value<ValueType> & ValidatorsContainer<Validators> & {
    stop?: boolean;
}): Partial<ValidatableRecord<Validators>>;
