import Validator from "@dikac/t-validator/validator";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Validatables from "./validatables/validatables";
import Message from "@dikac/t-message/message";
import Messages from "../message/messages/messages";
import MemoizeGetter from "../value/value/memoize-getter";

export type Interface<
    ValueT,
    MessageT,
    RecordT extends Record<PropertyKey, Validator<ValueT>>,
    Result extends Record<PropertyKey, ValidatorValidatable>,
    ValidatableT extends Validatable
> =
    Readonly<Value<ValueT>> &
    Readonly<Validatable<boolean>> &
    Readonly<Validatables<Result>> &
    Readonly<Messages<Result>> &
    Readonly<Message<MessageT>>
;

export default class ValueCallback<
    ValueT = unknown,
    MessageT = unknown,
    RecordT extends Record<PropertyKey, Validator<ValueT>> = Record<PropertyKey, Validator<ValueT>>,
    Result extends Record<PropertyKey, ValidatorValidatable> = Record<PropertyKey, ValidatorValidatable>,
    ValidatableT extends Validatable = Validatable
> implements Interface<ValueT, MessageT, RecordT, Result, ValidatableT> {

    constructor(
        readonly value: ValueT,
        readonly validators : RecordT,
        readonly map : (value:ValueT, validator:RecordT)=>Result,
        readonly validation : (result:Result)=>ValidatableT,
        readonly messageFactory : (result:Result)=>MessageT,
    ) {

    }

    get valid() : boolean {

        return this.validatable.valid;
    }

    get validatable () : ValidatableT {

        return  MemoizeGetter(this, 'validatable', this.validation(this.validatables));
    }

    get messages() : Result {

        return this.validatables;
    }

    get validatables() : Result {

        return  MemoizeGetter(this, 'validatables', this.map(this.value, this.validators));
    }

    get message() : MessageT {

        return  MemoizeGetter(this, 'message', this.messageFactory(this.validatables));

    }
}
