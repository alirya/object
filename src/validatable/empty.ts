import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import EmptyArgument from "../boolean/empty";
import MemoizeAccessor from "../function/memoize-accessor";

export default class Empty<Type extends object, MessageType>
    implements
        Readonly<Value<Type> & Message<MessageType> & Validatable>
{
    readonly valid : boolean;
    #message : (result:Readonly<Value<Type> & Validatable>)=>MessageType;
    readonly value : Type;

    constructor(
        //readonly value : Type,
        //private _message : (result:Readonly<Value<Type> & Validatable>)=>MessageType,
        {value, message} : Value<Type> & Message<(result:Readonly<Value<Type> & Validatable>)=>MessageType>
    ) {

        this.value = value;
        this.#message = message;
        this.valid = EmptyArgument(value);
    }

    @MemoizeAccessor()
    get message() : MessageType {

        return this.#message(this);
    }
}

