import Validator from "@dikac/t-validator/validator";
import ValidatorValidatable from "@dikac/t-validator/validatable/dynamic";
import Validatable from "@dikac/t-validatable/validatable";
import BaseValue from "@dikac/t-value/value";
import Validators from "../validator/validators/validators";
import Message from "@dikac/t-message/message";
import ValueCallbackParameters from "./value-callback-parameters";
export declare type ValueCallbackArgument<ValueType = unknown, MessageType = unknown, RecordType extends Record<PropertyKey, Validator<ValueType>> = Record<PropertyKey, Validator<ValueType>>, Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>, ValidatableType extends Validatable = Validatable> = BaseValue<ValueType> & Validators<RecordType> & {
    map: (argument: BaseValue<ValueType> & Validators<RecordType>) => Result;
} & {
    validation: (result: Result) => ValidatableType;
} & Message<(result: Result) => MessageType>;
export default class ValueCallbackParameter<ValueType = unknown, MessageType = unknown, RecordType extends Record<PropertyKey, Validator<ValueType>> = Record<PropertyKey, Validator<ValueType>>, Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>, ValidatableType extends Validatable = Validatable> extends ValueCallbackParameters<ValueType, MessageType, RecordType, Result, ValidatableType> {
    constructor({ message, value, validators, map, validation }: ValueCallbackArgument<ValueType, MessageType, RecordType, Result, ValidatableType>);
}
