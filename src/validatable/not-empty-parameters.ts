import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import NotEmptyArgument from "../boolean/not-empty";
import MemoizeAccessor from "../function/memoize-accessor";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameters";

export type NotEmptyType<ValueType extends object, MessageType> = Readonly<Value<ValueType> & Message<MessageType> & Validatable>;

export default class NotEmptyParameters<ValueType extends object, MessageType>
    implements
        NotEmptyType<ValueType, MessageType>
{
    readonly valid : boolean;
    #message : Dynamic<ValueType, MessageType>;
    readonly value : ValueType;

    constructor(
        value : ValueType,
        message : Dynamic<ValueType, MessageType>,
    ) {

        this.value = value;
        this.#message = message;
        this.valid = NotEmptyArgument(value);
    }

    @MemoizeAccessor()
    get message() : MessageType {

        return this.#message(this.value, this.valid);
    }
}
