import Validator from "@dikac/t-validator/validator";
import InferReturn from "@dikac/t-validator/validatable/infer-static";
export default function ValueParameters<ValueType, Validators extends Record<PropertyKey, Validator<ValueType>>>(value: ValueType, validators: Validators): Iterable<[keyof Validators, InferReturn<Validators[keyof Validators]>]>;
