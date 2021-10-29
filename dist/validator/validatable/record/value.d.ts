import ValidatableRecord from "./infer";
import Validator from "@dikac/t-validator/validator";
import ValidatorsContainer from "../../validators/validators";
import Value from "@dikac/t-value/value";
export default Value;
declare namespace Value {
    const Parameter: typeof ValueParameter;
    const Object: typeof ValueObject;
}
export declare function ValueParameter<ValueType, Validators extends Record<PropertyKey, Validator<ValueType>>>(value: ValueType, validators: Validators): ValidatableRecord<Validators>;
export declare function ValueObject<ValueType, Validators extends Record<PropertyKey, Validator<ValueType>>>({ value, validators }: ValidatorsContainer<Validators> & Value<ValueType>): ValidatableRecord<Validators>;
