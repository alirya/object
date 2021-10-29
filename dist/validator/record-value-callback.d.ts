import Validator from "@dikac/t-validator/validator";
import InferBase from "@dikac/t-validator/base/infer";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/validatable";
import RecordValue from "./record-value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import MessageType from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
export default RecordValueCallback;
declare namespace RecordValueCallback {
    const Parameter: typeof RecordValueCallbackParameter;
    const Object: typeof RecordValueCallbackObject;
    type Argument<ValidatorType extends Validator = Validator, Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>, ValidatableType extends Validatable = Validatable, Message = unknown> = RecordValueCallbackArgument<ValidatorType, Result, ValidatableType, Message>;
}
export declare function RecordValueCallbackParameter<ValidatorType extends Validator = Validator, Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>, ValidatableType extends Validatable = Validatable, Message = unknown>(validator: ValidatorType, handler: (value: Partial<Record<PropertyKey, InferBase<ValidatorType>>>, validator: ValidatorType) => Result, validation: (result: Result) => ValidatableType, message: (result: Result) => Message): RecordValue<ValidatorType, Result, ValidatableType, Message>;
export declare type RecordValueCallbackArgument<ValidatorType extends Validator = Validator, Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>, ValidatableType extends Validatable = Validatable, Message = unknown> = ValidatorContainer<ValidatorType> & MessageType<(result: Result) => Message> & {
    handler: (argument: Value<Partial<Record<PropertyKey, InferBase<ValidatorType>>>> & ValidatorContainer<ValidatorType>) => Result;
} & {
    validation: (result: Result) => ValidatableType;
};
export declare function RecordValueCallbackObject<ValidatorType extends Validator = Validator, Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>, ValidatableType extends Validatable = Validatable, Message = unknown>({ validator, handler, validation, message }: RecordValueCallbackArgument<ValidatorType, Result, ValidatableType, Message>): RecordValue<ValidatorType, Result, ValidatableType, Message>;
