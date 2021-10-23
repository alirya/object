import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import { O } from "ts-toolbelt";
import RecordValue from "./record-value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import MessageBase from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
export declare type Argument<MessageType = unknown, ValueType extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>, ValidatorType extends Validator<O.UnionOf<ValueType>> = Validator<O.UnionOf<ValueType>>, Result extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>, ValidatableType extends Validatable = Validatable> = Value<ValueType> & ValidatorContainer<ValidatorType> & MessageBase<(result: Result) => MessageType> & {
    map: (argument: Value<ValueType> & ValidatorContainer<ValidatorType>) => Result;
} & {
    validation: (result: Result) => ValidatableType;
};
export default class RecordValueCallback<MessageType = unknown, ValueType extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>, ValidatorType extends Validator<O.UnionOf<ValueType>> = Validator<O.UnionOf<ValueType>>, Result extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>, ValidatableType extends Validatable = Validatable> implements RecordValue<MessageType, ValueType, ValidatorType, Result, ValidatableType> {
    #private;
    readonly validatable: ValidatableType;
    readonly validatables: Result;
    readonly value: ValueType;
    readonly validator: ValidatorType;
    readonly map: (argument: Value<ValueType> & ValidatorContainer<ValidatorType>) => Result;
    readonly validation: (result: Result) => ValidatableType;
    constructor({ value, validator, map, validation, message }: Argument<MessageType, ValueType, ValidatorType, Result, ValidatableType>);
    get messages(): Result;
    get valid(): boolean;
    get message(): MessageType;
}
