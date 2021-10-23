import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import {O} from "ts-toolbelt";
import RecordValue from "./record-value";
import MemoizeAccessor from "../function/memoize-accessor";
import Instance from "@dikac/t-validator/validatable/validatable";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import MessageBase from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import InferBase from "@dikac/t-validator/base/infer";
import Validators from "../validator/validators/validators";

export type Argument<
    MessageType = unknown,
    ValueType extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
    ValidatorType extends Validator<O.UnionOf<ValueType>> = Validator<O.UnionOf<ValueType>>,
    Result extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>,
    ValidatableType extends Validatable = Validatable
> =
    Value<ValueType> &
    ValidatorContainer<ValidatorType> &
    MessageBase<(result:Result)=>MessageType> &
    //{handler: (record: Partial<Record<PropertyKey, InferBase<ValidatorType>>>, validator: ValidatorType) => Result} &
    //{ map: (value: ValueType, validators: ValidatorType) => Result } &
    { map: (argument : Value<ValueType> & ValidatorContainer<ValidatorType>) => Result } &
    //{handler: (argument : Value<Partial<Record<PropertyKey, InferBase<ValidatorType>>>> & ValidatorContainer<ValidatorType>) => Result} &
    {validation: (result: Result) => ValidatableType};
;


export default class RecordValueCallback<
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
    readonly value: ValueType;
    readonly validator : ValidatorType;
    readonly map : (argument: Value<ValueType> & ValidatorContainer<ValidatorType>)=>Result;
    readonly validation : (result:Result)=>ValidatableType;

    constructor(
        //readonly value: ValueType,
        //readonly validator : ValidatorType,
        //readonly map : (value:ValueType, validators:ValidatorType)=>Result,
        //readonly validation : (result:Result)=>ValidatableType,
        //message : (result:Result)=>MessageType,
        {   value,
            validator,
            map,
            validation,
            message
        } : Argument<MessageType, ValueType, ValidatorType, Result, ValidatableType>
    ) {

        this.value = value;
        this.validator = validator;
        this.map = map;
        this.validation = validation;

        this.#message = message;
        this.validatables = map({value, validator});
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
