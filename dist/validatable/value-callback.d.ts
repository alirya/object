import Validator from "@dikac/t-validator/validator";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import BaseValue from "@dikac/t-value/value";
import Value from "./value";
import Validators from "../validator/validators/validators";
import Message from "@dikac/t-message/message";
export default ValueCallback;
export declare class ValueCallbackParameter<ValueType = unknown, MessageType = unknown, RecordType extends Record<PropertyKey, Validator<ValueType>> = Record<PropertyKey, Validator<ValueType>>, Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>, ValidatableType extends Validatable = Validatable> implements Value<ValueType, MessageType, RecordType, Result, ValidatableType> {
    #private;
    readonly value: ValueType;
    readonly validators: RecordType;
    readonly map: (value: ValueType, validators: RecordType) => Result;
    readonly validation: (result: Result) => ValidatableType;
    readonly validatable: ValidatableType;
    readonly validatables: Result;
    constructor(value: ValueType, validators: RecordType, map: (value: ValueType, validators: RecordType) => Result, validation: (result: Result) => ValidatableType, message: (result: Result) => MessageType);
    get valid(): boolean;
    get messages(): Result;
    get message(): MessageType;
}
export declare type ValueCallbackArgument<ValueType = unknown, MessageType = unknown, RecordType extends Record<PropertyKey, Validator<ValueType>> = Record<PropertyKey, Validator<ValueType>>, Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>, ValidatableType extends Validatable = Validatable> = BaseValue<ValueType> & Validators<RecordType> & {
    map: (argument: BaseValue<ValueType> & Validators<RecordType>) => Result;
} & {
    validation: (result: Result) => ValidatableType;
} & Message<(result: Result) => MessageType>;
export declare class ValueCallbackObject<ValueType = unknown, MessageType = unknown, RecordType extends Record<PropertyKey, Validator<ValueType>> = Record<PropertyKey, Validator<ValueType>>, Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>, ValidatableType extends Validatable = Validatable> extends ValueCallbackParameter<ValueType, MessageType, RecordType, Result, ValidatableType> {
    constructor({ message, value, validators, map, validation }: ValueCallbackArgument<ValueType, MessageType, RecordType, Result, ValidatableType>);
}
declare namespace ValueCallback {
    const Parameter: typeof ValueCallbackParameter;
    const Object: typeof ValueCallbackObject;
    type Argument<ValueType = unknown, MessageType = unknown, RecordType extends Record<PropertyKey, Validator<ValueType>> = Record<PropertyKey, Validator<ValueType>>, Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>, ValidatableType extends Validatable = Validatable> = ValueCallbackArgument<ValueType, MessageType, RecordType, Result, ValidatableType>;
}
