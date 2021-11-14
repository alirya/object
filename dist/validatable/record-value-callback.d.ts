import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import { O } from "ts-toolbelt";
import RecordValueCallbackParameters from "./record-value-callback-parameters";
import RecordValueCallbackParameter, { RecordValueCallbackArgument } from "./record-value-callback-parameter";
declare namespace RecordValueCallback {
    const Parameters: typeof RecordValueCallbackParameters;
    const Parameter: typeof RecordValueCallbackParameter;
    type Argument<MessageType = unknown, ValueType extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>, ValidatorType extends Validator<O.UnionOf<ValueType>> = Validator<O.UnionOf<ValueType>>, Result extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>, ValidatableType extends Validatable = Validatable> = RecordValueCallbackArgument<MessageType, ValueType, ValidatorType, Result, ValidatableType>;
}
export default RecordValueCallback;
