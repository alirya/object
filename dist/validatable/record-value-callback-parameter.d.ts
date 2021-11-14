import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import { O } from "ts-toolbelt";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import MessageBase from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import RecordValueCallbackParameters from "./record-value-callback-parameters";
export declare type RecordValueCallbackArgument<MessageType = unknown, ValueType extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>, ValidatorType extends Validator<O.UnionOf<ValueType>> = Validator<O.UnionOf<ValueType>>, Result extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>, ValidatableType extends Validatable = Validatable> = Value<ValueType> & ValidatorContainer<ValidatorType> & MessageBase<(result: Result) => MessageType> & {
    map: (argument: Value<ValueType> & ValidatorContainer<ValidatorType>) => Result;
} & {
    validation: (result: Result) => ValidatableType;
};
export default class RecordValueCallbackParameter<MessageType = unknown, ValueType extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>, ValidatorType extends Validator<O.UnionOf<ValueType>> = Validator<O.UnionOf<ValueType>>, Result extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>, ValidatableType extends Validatable = Validatable> extends RecordValueCallbackParameters<MessageType, ValueType, ValidatorType, Result, ValidatableType> {
    constructor({ value, validator, map, validation, message }: RecordValueCallbackArgument<MessageType, ValueType, ValidatorType, Result, ValidatableType>);
}
