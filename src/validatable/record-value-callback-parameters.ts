import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import {O} from "ts-toolbelt";
import RecordValue from "./record-value";
import MemoizeAccessor from "../function/memoize-accessor";

export default class RecordValueCallbackParameters<
    MessageType = unknown,
    ValueType extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
    ValidatorType extends Validator<O.UnionOf<ValueType>> = Validator<O.UnionOf<ValueType>>,
    Result extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>,
    ValidatableType extends Validatable = Validatable
> implements RecordValue<MessageType, ValueType, ValidatorType, Result, ValidatableType>
{
    readonly validatable : ValidatableType;
    #message : (result:Result)=>MessageType
    readonly validatables : Result;
    // readonly value: ValueType;
    // readonly validator : ValidatorType;
    // readonly map : (argument: Value<ValueType> & ValidatorContainer<ValidatorType>)=>Result;
    // readonly validation : (result:Result)=>ValidatableType;

    constructor(
        readonly value: ValueType,
        readonly validator : ValidatorType,
        readonly map : (value:ValueType, validator:ValidatorType)=>Result,
        readonly validation : (result:Result)=>ValidatableType,
        message : (result:Result)=>MessageType,
        // {   value,
        //     validator,
        //     map,
        //     validation,
        //     message
        // } : RecordValueCallbackArgument<MessageType, ValueType, ValidatorType, Result, ValidatableType>
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

            throw new Error(`error on generating message, ${e}`)
        }
    }
}
