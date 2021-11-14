import Validator from "@dikac/t-validator/validator";
import ValidatorValidatable from "@dikac/t-validator/validatable/dynamic";
import Validatable from "@dikac/t-validatable/validatable";
import ValueCallbackParameters from "./value-callback-parameters";
import ValueCallbackParameter, { ValueCallbackArgument } from "./value-callback-parameter";
declare namespace ValueCallback {
    const Parameters: typeof ValueCallbackParameters;
    const Parameter: typeof ValueCallbackParameter;
    type Argument<ValueType = unknown, MessageType = unknown, RecordType extends Record<PropertyKey, Validator<ValueType>> = Record<PropertyKey, Validator<ValueType>>, Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>, ValidatableType extends Validatable = Validatable> = ValueCallbackArgument<ValueType, MessageType, RecordType, Result, ValidatableType>;
}
export default ValueCallback;
