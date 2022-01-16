import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import Message from "@alirya/message/message";
import EmptyArgument from "../boolean/empty";
import MemoizeAccessor from "../function/memoize-accessor";

export type EmptyType<Type extends object, MessageType> = Readonly<Value<Type> & Message<MessageType> & Validatable>;

export default class EmptyParameters<Type extends object, MessageType>
    implements
        EmptyType<Type, MessageType>
{
    readonly valid : boolean;
    #message : (value:Type, valid : boolean)=>MessageType;

    constructor(
        readonly value : Type,
        message : (value:Type, valid : boolean)=>MessageType,
    ) {

        this.value = value;
        this.#message = message;
        this.valid = EmptyArgument(value);
    }

    @MemoizeAccessor()
    get message() : MessageType {

        return this.#message(this.value, this.valid);
    }
}
