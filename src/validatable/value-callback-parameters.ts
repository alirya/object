import Validator from "@dikac/t-validator/validator";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "./value";
import MemoizeAccessor from "../function/memoize-accessor";

export default class ValueCallbackParameters<
    ValueType = unknown,
    MessageType = unknown,
    RecordType extends Record<PropertyKey, Validator<ValueType>> = Record<PropertyKey, Validator<ValueType>>,
    Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
    ValidatableType extends Validatable = Validatable
> implements Value<ValueType, MessageType, RecordType, Result, ValidatableType> {

    #message : (result:Result)=>MessageType;
    readonly validatable : ValidatableType;
    readonly validatables : Result;

    constructor(
        readonly value: ValueType,
        readonly validators : RecordType,
        readonly map : (value:ValueType, validators:RecordType)=>Result,
        readonly validation : (result:Result)=>ValidatableType,
        message : (result:Result)=>MessageType,
    ) {

        this.value = value;
        this.#message = message;
        this.validatables = map(value, validators);
        this.validatable = validation(this.validatables);
    }

    get valid() : boolean {

        return this.validatable.valid;
    }

    get messages() : Result {

        return this.validatables;
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
