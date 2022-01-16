import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import {O} from 'ts-toolbelt';
import ValidatorContainer from '@alirya/validator/validator/validator';
import MessageBase from '@alirya/message/message';
import Value from '@alirya/value/value';
import RecordValueCallbackParameters from './record-value-callback-parameters';

export type RecordValueCallbackArgument<
    MessageType = unknown,
    ValueType extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
    ValidatorType extends Validator<O.UnionOf<ValueType>> = Validator<O.UnionOf<ValueType>>,
    Result extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>,
    ValidatableType extends Validatable = Validatable
    > =
    Value<ValueType> &
    ValidatorContainer<ValidatorType> &
    MessageBase<(result:Result)=>MessageType> &
    { map: (argument : Value<ValueType> & ValidatorContainer<ValidatorType>) => Result } &
    {validation: (result: Result) => ValidatableType};



export default class RecordValueCallbackParameter<
    MessageType = unknown,
    ValueType extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
    ValidatorType extends Validator<O.UnionOf<ValueType>> = Validator<O.UnionOf<ValueType>>,
    Result extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>,
    ValidatableType extends Validatable = Validatable
> extends RecordValueCallbackParameters<
    MessageType,
    ValueType,
    ValidatorType,
    Result,
    ValidatableType
> {
    constructor({
        value,
        validator,
        map,
        validation,
        message
    } : RecordValueCallbackArgument<MessageType, ValueType, ValidatorType, Result, ValidatableType>) {

        super(
            value,
            validator,
            (value, validator) => map({value, validator}),
            validation,
            message
        );
    }
}
