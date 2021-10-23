import ValidatorsContainer from "../../validators/validators";
import Validator from "@dikac/t-validator/validator";
import InferReturn from "@dikac/t-validator/validatable/infer-unambiguous";
import Value from "@dikac/t-value/value";
export default function Value<ValueType, Validators extends Record<PropertyKey, Validator<ValueType>>>({ value, validators }: ValidatorsContainer<Validators> & Value<ValueType>): Iterable<[keyof Validators, InferReturn<Validators[keyof Validators]>]>;
