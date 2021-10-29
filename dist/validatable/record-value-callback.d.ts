import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import { O } from "ts-toolbelt";
import RecordValue from "./record-value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import MessageBase from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
export default RecordValueCallback;
export declare class RecordValueCallbackParameter<MessageType = unknown, ValueType extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>, ValidatorType extends Validator<O.UnionOf<ValueType>> = Validator<O.UnionOf<ValueType>>, Result extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>, ValidatableType extends Validatable = Validatable> implements RecordValue<MessageType, ValueType, ValidatorType, Result, ValidatableType> {
    #private;
    readonly value: ValueType;
    readonly validator: ValidatorType;
    readonly map: (value: ValueType, validator: ValidatorType) => Result;
    readonly validation: (result: Result) => ValidatableType;
    readonly validatable: ValidatableType;
    readonly validatables: Result;
    constructor(value: ValueType, validator: ValidatorType, map: (value: ValueType, validator: ValidatorType) => Result, validation: (result: Result) => ValidatableType, message: (result: Result) => MessageType);
    get messages(): Result;
    get valid(): boolean;
    get message(): MessageType;
}
export declare type RecordValueCallbackArgument<MessageType = unknown, ValueType extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>, ValidatorType extends Validator<O.UnionOf<ValueType>> = Validator<O.UnionOf<ValueType>>, Result extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>, ValidatableType extends Validatable = Validatable> = Value<ValueType> & ValidatorContainer<ValidatorType> & MessageBase<(result: Result) => MessageType> & {
    map: (argument: Value<ValueType> & ValidatorContainer<ValidatorType>) => Result;
} & {
    validation: (result: Result) => ValidatableType;
};
export declare class RecordValueCallbackObject<MessageType = unknown, ValueType extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>, ValidatorType extends Validator<O.UnionOf<ValueType>> = Validator<O.UnionOf<ValueType>>, Result extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>, ValidatableType extends Validatable = Validatable> extends RecordValueCallbackParameter<MessageType, ValueType, ValidatorType, Result, ValidatableType> {
    constructor({ value, validator, map, validation, message }: RecordValueCallbackArgument<MessageType, ValueType, ValidatorType, Result, ValidatableType>);
}
declare namespace RecordValueCallback {
    const Parameter: typeof RecordValueCallbackParameter;
    const Object: typeof RecordValueCallbackObject;
    type Argument<MessageType = unknown, ValueType extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>, ValidatorType extends Validator<O.UnionOf<ValueType>> = Validator<O.UnionOf<ValueType>>, Result extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>, ValidatableType extends Validatable = Validatable> = RecordValueCallbackArgument<MessageType, ValueType, ValidatorType, Result, ValidatableType>;
}
