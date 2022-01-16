import Validator from "@alirya/validator/validator";
import ValidatorValidatable from "@alirya/validator/validatable/validatable";
import Validatable from "@alirya/validatable/validatable";
import BaseValue from "@alirya/value/value";
import Validators from "../validator/validators/validators";
import Message from "@alirya/message/message";
import ValueCallbackParameters from "./value-callback-parameters";

export type ValueCallbackArgument<
    ValueType = unknown,
    MessageType = unknown,
    RecordType extends Record<PropertyKey, Validator<ValueType>> = Record<PropertyKey, Validator<ValueType>>,
    Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
    ValidatableType extends Validatable = Validatable
> =
    BaseValue<ValueType> &
    Validators<RecordType> &
    {map : (argument:BaseValue<ValueType> & Validators<RecordType>)=>Result} &
    // TODO CHANGE TO VALIDATOR
    {validation: (result:Result)=>ValidatableType} &
    Message<(result:Result)=>MessageType>


export default class ValueCallbackParameter<
    ValueType = unknown,
    MessageType = unknown,
    RecordType extends Record<PropertyKey, Validator<ValueType>> = Record<PropertyKey, Validator<ValueType>>,
    Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
    ValidatableType extends Validatable = Validatable
> extends ValueCallbackParameters<ValueType, MessageType, RecordType, Result, ValidatableType> {

    constructor({
            message,
            value,
            validators,
            map,
            validation
        } : ValueCallbackArgument<ValueType, MessageType, RecordType, Result, ValidatableType>
    ) {
        super(value, validators, (value, validators)=>map({value, validators}), validation, message);
    }
}
