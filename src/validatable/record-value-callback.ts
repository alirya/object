import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import {O} from 'ts-toolbelt';
// import RecordValue from './record-value';
import MemoizeAccessor from '../function/memoize-accessor';
import ValidatorContainer from '@alirya/validator/validator/validator';
import MessageBase from '@alirya/message/message';
import Value from '@alirya/value/value';
import Validatables from './validatables/validatables';
import Message from '@alirya/message/message';
import ValidatableContainer from '@alirya/validatable/validatable/validatable';
import ValidatorValidatable from '@alirya/validator/validatable/validatable';

export interface RecordValueCallbackContext<
    // MessageType = unknown,
    ValueType extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
    ValidatorType extends Validator<O.UnionOf<ValueType>> = Validator<O.UnionOf<ValueType>>,
    Result extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>,
    ValidatableType extends Validatable = Validatable
> extends
    ValidatorContainer<ValidatorType>,
    ValidatableContainer<ValidatableType>,
    // Value<ValueType>,
    // Validatable,
    Validatables<Result>
    // Message<MessageType>
{

}

export class RecordValueCallbackParameters<
    MessageType = unknown,
    ValueType extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
    ValidatorType extends Validator<O.UnionOf<ValueType>> = Validator<O.UnionOf<ValueType>>,
    Result extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>,
    ValidatableType extends Validatable = Validatable
> implements ValidatorValidatable<ValueType, MessageType>, RecordValueCallbackContext</*MessageType, */ValueType, ValidatorType, Result/*, ValidatableType*/>
{
    readonly validatable : ValidatableType;
    #message : (result:Result)=>MessageType;
    readonly validatables : Result;

    constructor(
        readonly value: ValueType,
        readonly validator : ValidatorType,
        readonly map : (value:ValueType, validator:ValidatorType)=>Result,
        readonly validation : (result:Result)=>ValidatableType,
        message : (result:Result)=>MessageType,
    ) {

        this.value = value;
        this.validator = validator;
        this.map = map;
        this.validation = validation;

        this.#message = message;
        this.validatables = map(value, validator);
        this.validatable = validation(this.validatables);
    }

    get messages() : Result {

        return this.validatables;
    }

    get valid() : boolean {

        return this.validatable.valid;
    }

    @MemoizeAccessor()
    get message() : MessageType {

        try {

            return this.#message(this.validatables);

        } catch (e) {

            throw new Error(`error on generating message, ${e}`);
        }
    }
}



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



export class RecordValueCallbackParameter<
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


namespace RecordValueCallback {
    export const Parameters = RecordValueCallbackParameters;
    export const Parameter = RecordValueCallbackParameter;
    export type Argument<
        MessageType = unknown,
        ValueType extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
        ValidatorType extends Validator<O.UnionOf<ValueType>> = Validator<O.UnionOf<ValueType>>,
        Result extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>,
        ValidatableType extends Validatable = Validatable
    > = RecordValueCallbackArgument<
        MessageType,
        ValueType,
        ValidatorType,
        Result,
        ValidatableType
    >;

    export type Context<
        MessageType = unknown,
        ValueType extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
        ValidatorType extends Validator<O.UnionOf<ValueType>> = Validator<O.UnionOf<ValueType>>,
        Result extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>,
        ValidatableType extends Validatable = Validatable
    > = RecordValueCallbackContext<
        // MessageType,
        ValueType,
        ValidatorType,
        Result
        // ValidatableType
    >;
}
export default RecordValueCallback;
