import ValidatableRecord from "./infer";
import Validator from "@dikac/t-validator/validator";
export default function ValuePartialParameters<ValueType, Validators extends Record<PropertyKey, Validator<ValueType>>>(value: ValueType, validators: Validators, stop?: boolean): Partial<ValidatableRecord<Validators>>;
