import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordKey from "./record-key";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import InferBase from "@dikac/t-validator/base/infer";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
export default RecordKeyCallback;
declare namespace RecordKeyCallback {
    const Parameter: typeof RecordKeyCallbackParameter;
    const Object: typeof RecordKeyCallbackObject;
    type Argument<ValidatorType extends Validator<PropertyKey> = Validator<PropertyKey>, Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>, ValidatableType extends Validatable = Validatable, MessageType = unknown> = RecordKeyCallbackArgument<ValidatorType, Result, ValidatableType, MessageType>;
}
export declare function RecordKeyCallbackParameter<ValidatorType extends Validator<PropertyKey> = Validator<PropertyKey>, Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>, ValidatableType extends Validatable = Validatable, MessageType = unknown>(validator: ValidatorType, handler: (value: Record<InferBase<ValidatorType>, any>, validator: ValidatorType) => Result, validation: (result: Result) => ValidatableType, message: (result: Result) => MessageType): RecordKey<ValidatorType, Result, ValidatableType, MessageType>;
export declare type RecordKeyCallbackArgument<ValidatorType extends Validator<PropertyKey> = Validator<PropertyKey>, Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>, ValidatableType extends Validatable = Validatable, MessageType = unknown> = ValidatorContainer<ValidatorType> & Message<(result: Result) => MessageType> & {
    handler: (argument: Value<Record<InferBase<ValidatorType>, any>> & ValidatorContainer<ValidatorType>) => Result;
} & {
    validation: (result: Result) => ValidatableType;
};
export declare function RecordKeyCallbackObject<ValidatorType extends Validator<PropertyKey> = Validator<PropertyKey>, Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>, ValidatableType extends Validatable = Validatable, MessageType = unknown>({ validator, handler, validation, message }: RecordKeyCallbackArgument<ValidatorType, Result, ValidatableType, MessageType>): RecordKey<ValidatorType, Result, ValidatableType, MessageType>;
