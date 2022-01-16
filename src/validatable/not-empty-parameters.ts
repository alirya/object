import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import NotEmptyArgument from '../boolean/not-empty';
import MemoizeAccessor from '../function/memoize-accessor';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';

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
