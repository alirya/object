import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import RecordParameter from '../validator/subject/record/allow';
import RecordBase from '../validator/subject/record/allow';
import Instance from '@alirya/validator/validatable/validatable';
// import Map from './map';
import {PickParameters} from '../pick';
import MemoizeAccessor from '../function/memoize-accessor';
import Value from '@alirya/value/value';
import Validators from '../validator/validators/validators';
import Message from '@alirya/message/message';

// import Validator from '@alirya/validator/validator';
// import Validatable from '@alirya/validatable/validatable';
import ValidatableContainer from '@alirya/validatable/validatable/validatable';
import Validatables from './validatables/validatables';
// import RecordBase from '../validator/subject/record/allow';
// import Instance from '@alirya/validator/validatable/validatable';
import Messages from '../message/messages/messages';
// import Validators from '../validator/validators/validators';

export interface MapCallbackContext<
    // MessageType,
    ValidatorsType extends Record<PropertyKey, Validator>,
    Result extends Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable,
    // ValueType extends RecordBase<ValidatorsType>
> extends
    // Instance<ValueType, MessageType>,
    // Validatable,
    Validatables<Result>,
    ValidatableContainer<ValidatableType>,
    Messages<Result>,
    Validators<ValidatorsType>
{}

export class MapCallbackParameters<
    MessageType = unknown,
    ValidatorsType extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    ValueType extends RecordBase<ValidatorsType> = RecordBase<ValidatorsType>
> implements Instance<ValueType, MessageType>, MapCallbackContext</*MessageType,*/ ValidatorsType, Result, ValidatableType/*, ValueType*/> {

    #value : ValueType;
    #message : (result : Result)=>MessageType;
    readonly validatable : ValidatableType;
    readonly validatables : Result;

    constructor(
        value: ValueType,
        public validators : ValidatorsType,
        private map : (values : RecordParameter<ValidatorsType>, validators : ValidatorsType)=>Result,
        private validation : (result : Result)=>ValidatableType,
        message : (result : Result)=>MessageType,
    ) {

        this.validators = validators;
        this.map = map;
        this.validation = validation;

        this.#value = value;
        this.#message = message;
        this.validatables = this.map(this.#value, this.validators);
        this.validatable = this.validation(this.validatables);
    }

    get valid() : boolean {

        return this.validatable.valid;
    }

    get messages () : Result {

        return this.validatables;
    }

    @MemoizeAccessor()
    get value () : ValueType {

        return this.#value as ValueType;
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


export class MapCallbackParameter<
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



namespace MapCallback {
    export const Parameters = MapCallbackParameters;
    export const Parameter = MapCallbackParameter;
    export type Context<
        ValidatorsType extends Record<PropertyKey, Validator>,
        Result extends Partial<Record<PropertyKey, Instance>>,
        ValidatableType extends Validatable,
    > = MapCallbackContext<
        ValidatorsType,
        Result,
        ValidatableType
    >;
}
export default MapCallback;
