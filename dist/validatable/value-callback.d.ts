import Validator from "@dikac/t-validator/validator";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import BaseValue from "@dikac/t-value/value";
import Value from "./value";
import Validators from "../validator/validators/validators";
import Message from "@dikac/t-message//message";
export declare type Argument<ValueType = unknown, MessageType = unknown, RecordType extends Record<PropertyKey, Validator<ValueType>> = Record<PropertyKey, Validator<ValueType>>, Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>, ValidatableType extends Validatable = Validatable> = BaseValue<ValueType> & Validators<RecordType> & {
    map: (argument: BaseValue<ValueType> & Validators<RecordType>) => Result;
} & {
    validation: (result: Result) => ValidatableType;
} & Message<(result: Result) => MessageType>;
export default class ValueCallback<ValueType = unknown, MessageType = unknown, RecordType extends Record<PropertyKey, Validator<ValueType>> = Record<PropertyKey, Validator<ValueType>>, Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>, ValidatableType extends Validatable = Validatable> implements Value<ValueType, MessageType, RecordType, Result, ValidatableType> {
    #private;
    readonly validatable: ValidatableType;
    readonly validatables: Result;
    readonly value: ValueType;
    constructor({ message, value, validators, map, validation }: Argument<ValueType, MessageType, RecordType, Result, ValidatableType>);
    get valid(): boolean;
    get messages(): Result;
    get message(): MessageType;
}
