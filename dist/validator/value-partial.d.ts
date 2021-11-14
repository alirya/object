import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import ValuePartialParameters, { ValuePartialType } from "./value-partial-parameters";
import ValuePartialParameter, { ValuePartialArgument } from "./value-partial-parameter";
declare namespace ValuePartial {
    const Parameters: typeof ValuePartialParameters;
    const Parameter: typeof ValuePartialParameter;
    type Type = ValuePartialType;
    type Argument<BaseType = unknown, ValueType extends BaseType = BaseType, MessageType = unknown, Validators extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>, ValidatableType extends Validatable = Validatable> = ValuePartialArgument<BaseType, ValueType, MessageType, Validators, ValidatableType>;
}
export default ValuePartial;
