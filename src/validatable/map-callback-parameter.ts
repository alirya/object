import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordParameter from "../validator/subject/record/allow";
import RecordBase from "../validator/subject/record/allow";
import Instance from "@dikac/t-validator/validatable/validatable";
import Value from "@dikac/t-value/value";
import Validators from "../validator/validators/validators";
import Message from "@dikac/t-message/message";
import MapCallbackParameters from "./map-callback-parameters";

export type MapCallbackArgument<
    MessageType = unknown,
    ValidatorsType extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    ValueType extends RecordBase<ValidatorsType> = RecordBase<ValidatorsType>
> = Value<ValueType> &
    Validators<ValidatorsType> &
    {map : (values : RecordParameter<ValidatorsType>, validators : ValidatorsType)=>Result} &
    // TODO CHANGE TO VALIDATOR
    {validation : (result : Result)=>ValidatableType} &
    Message<(result : Result)=>MessageType>;


export default class MapCallbackParameter<
    MessageType = unknown,
    ValidatorsType extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    ValueType extends RecordBase<ValidatorsType> = RecordBase<ValidatorsType>
> extends MapCallbackParameters<MessageType, ValidatorsType, Result, ValidatableType, ValueType> {

    constructor(
        {
            value,
            validators,
            map,
            validation,
            message
        } : MapCallbackArgument<MessageType, ValidatorsType, Result, ValidatableType, ValueType>
    ) {
        super(value, validators, map, validation, message);
    }
}

