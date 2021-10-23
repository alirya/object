import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordParameter from "../validator/base/record/infer";
import RecordBase from "../validator/base/record/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import Map from "./map";
import Value from "@dikac/t-value/value";
import Validators from "../validator/validators/validators";
import Message from "@dikac/t-message/message";
export default class MapCallback<MessageType = unknown, ValidatorsType extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>, ValidatableType extends Validatable = Validatable, ValueType extends RecordBase<ValidatorsType> = RecordBase<ValidatorsType>> implements Map<MessageType, ValidatorsType, Result, ValidatableType, ValueType> {
    #private;
    readonly validatable: ValidatableType;
    readonly validatables: Result;
    validators: ValidatorsType;
    private map;
    private validation;
    constructor({ value, validators, map, validation, message }: Value<ValueType> & Validators<ValidatorsType> & {
        map: (values: RecordParameter<ValidatorsType>, validators: ValidatorsType) => Result;
    } & {
        validation: (result: Result) => ValidatableType;
    } & Message<(result: Result) => MessageType>);
    get valid(): boolean;
    get messages(): Result;
    get value(): ValueType;
    get message(): MessageType;
}
