import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import ValidatorValidatable from '@alirya/validator/validatable/validatable';
import Message from '@alirya/message/message';
import NotEmptyArgument from '../boolean/not-empty';
import MemoizeAccessor from '../function/memoize-accessor';
import Dynamic from '@alirya/validator/message/function/validatable';

export type NotEmptyType<ValueType extends object, MessageType> = ValidatorValidatable<ValueType, MessageType>;

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
