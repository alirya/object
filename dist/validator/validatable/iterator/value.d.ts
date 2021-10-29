import ValidatorsContainer from "../../validators/validators";
import Validator from "@dikac/t-validator/validator";
import InferReturn from "@dikac/t-validator/validatable/infer-unambiguous";
import Value from "@dikac/t-value/value";
export default Value;
declare namespace Value {
    const Parameter: typeof ValueParameter;
    const Object: typeof ValueObject;
    type Argument<ValueType, Validators extends Record<PropertyKey, Validator<ValueType>>> = ValueArgument<ValueType, Validators>;
}
export declare function ValueParameter<ValueType, Validators extends Record<PropertyKey, Validator<ValueType>>>(value: ValueType, validators: Validators): Iterable<[keyof Validators, InferReturn<Validators[keyof Validators]>]>;
export declare type ValueArgument<ValueType, Validators extends Record<PropertyKey, Validator<ValueType>>> = ValidatorsContainer<Validators> & Value<ValueType>;
export declare function ValueObject<ValueType, Validators extends Record<PropertyKey, Validator<ValueType>>>({ value, validators }: ValidatorsContainer<Validators> & Value<ValueType>): Iterable<[keyof Validators, InferReturn<Validators[keyof Validators]>]>;
