import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import NotEmptyArgument from "../boolean/not-empty";
import MemoizeAccessor from "../function/memoize-accessor";

export default class NotEmpty<ValueType extends object, MessageType>
    implements
        Readonly<Value<ValueType> & Message<MessageType> & Validatable>
{
    readonly valid : boolean;
    #message : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType;
    readonly value : ValueType;

    constructor(
        // readonly value : ValueType,
        // private _message : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType,
        {
            value,
            message,
        } : Value<ValueType> & Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>
    ) {

        this.value = value;
        this.#message = message;
        this.valid = NotEmptyArgument(value);
    }

    @MemoizeAccessor()
    get message() : MessageType {

        return this.#message(this);
    }
}

