import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordParameter from "../validator/base/record/infer";
import RecordBase from "../validator/base/record/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import Map from "./map";
import Value from "@dikac/t-value/value";
import Validators from "../validator/validators/validators";
import Message from "@dikac/t-message/message";
export default MapCallback;
export declare class MapCallbackParameter<MessageType = unknown, ValidatorsType extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>, ValidatableType extends Validatable = Validatable, ValueType extends RecordBase<ValidatorsType> = RecordBase<ValidatorsType>> implements Map<MessageType, ValidatorsType, Result, ValidatableType, ValueType> {
    #private;
    validators: ValidatorsType;
    private map;
    private validation;
    readonly validatable: ValidatableType;
    readonly validatables: Result;
    constructor(value: ValueType, validators: ValidatorsType, map: (values: RecordParameter<ValidatorsType>, validators: ValidatorsType) => Result, validation: (result: Result) => ValidatableType, message: (result: Result) => MessageType);
    get valid(): boolean;
    get messages(): Result;
    get value(): ValueType;
    get message(): MessageType;
}
export declare type MapCallbackArgument<MessageType = unknown, ValidatorsType extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>, ValidatableType extends Validatable = Validatable, ValueType extends RecordBase<ValidatorsType> = RecordBase<ValidatorsType>> = Value<ValueType> & Validators<ValidatorsType> & {
    map: (values: RecordParameter<ValidatorsType>, validators: ValidatorsType) => Result;
} & {
    validation: (result: Result) => ValidatableType;
} & Message<(result: Result) => MessageType>;
export declare class MapCallbackObject<MessageType = unknown, ValidatorsType extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>, ValidatableType extends Validatable = Validatable, ValueType extends RecordBase<ValidatorsType> = RecordBase<ValidatorsType>> extends MapCallbackParameter<MessageType, ValidatorsType, Result, ValidatableType, ValueType> {
    constructor({ value, validators, map, validation, message }: MapCallbackArgument<MessageType, ValidatorsType, Result, ValidatableType, ValueType>);
}
declare namespace MapCallback {
    const Parameter: typeof MapCallbackParameter;
    const Object: typeof MapCallbackObject;
    type Argument<MessageType = unknown, ValidatorsType extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>, ValidatableType extends Validatable = Validatable, ValueType extends RecordBase<ValidatorsType> = RecordBase<ValidatorsType>> = MapCallbackArgument<MessageType, ValidatorsType, Result, ValidatableType, ValueType>;
}
