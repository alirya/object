import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';
import Message from '@alirya/message/message.js';
import NotEmptyArgument from '../boolean/not-empty.js';
import MemoizeAccessor from '../function/memoize-accessor.js';
import Dynamic from '@alirya/validator/message/function/validatable.js';

export type NotEmptyType<ValueType extends object, MessageType> = Readonly<Value<ValueType> & Message<MessageType> & Validatable>;

export class NotEmptyParameters<ValueType extends object, MessageType>
    implements
        NotEmptyType<ValueType, MessageType>
{
    readonly valid : boolean;
    #message : Dynamic.Parameters<ValueType, MessageType>;
    readonly value : ValueType;

    constructor(
        value : ValueType,
        message : Dynamic.Parameters<ValueType, MessageType>,
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


export type NotEmptyArgument<
    ValueType extends object,
    MessageType
> = Value<ValueType> &
    Message<Dynamic.Parameter<ValueType, MessageType>>;

export class NotEmptyParameter<
    ValueType extends object,
    MessageType
> extends NotEmptyParameters<
    ValueType,
    MessageType
    > {

    constructor(
        {
            value,
            message,
        } : NotEmptyArgument<ValueType, MessageType>
    ) {
        super(value, (value, valid) => message({value, valid}));
    }
}



namespace NotEmpty {
    export const Parameters = NotEmptyParameters;
    export const Parameter = NotEmptyParameter;
}
export default NotEmpty;
