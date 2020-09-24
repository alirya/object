import Validator from "@dikac/t-validator/validator";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import SetGetter from "../value/value/set-getter";
import Value from "./value";
import MemoizeAccessor from "../function/memoize-accessor";

export default class ValueCallback<
    ValueType = unknown,
    MessageType = unknown,
    RecordType extends Record<PropertyKey, Validator<ValueType>> = Record<PropertyKey, Validator<ValueType>>,
    Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
    ValidatableType extends Validatable = Validatable
> implements Value<ValueType, MessageType, RecordType, Result, ValidatableType> {

    #message : (result:Result)=>MessageType;

    constructor(
        readonly value: ValueType,
        readonly validators : RecordType,
        readonly map : (value:ValueType, validator:RecordType)=>Result,
        readonly validation : (result:Result)=>ValidatableType,
        message : (result:Result)=>MessageType,
    ) {

        this.#message = message;
    }

    get valid() : boolean {

        return this.validatable.valid;
    }

    @MemoizeAccessor()
    get validatable () : ValidatableType {

        return this.validation(this.validatables);
    }

    get messages() : Result {

        return this.validatables;
    }

    @MemoizeAccessor()
    get validatables() : Result {

        return this.map(this.value, this.validators);
    }

    @MemoizeAccessor()
    get message() : MessageType {

        return this.#message(this.validatables);

    }
}
