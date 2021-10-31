import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import NotEmptyArgument from "../boolean/not-empty";
import MemoizeAccessor from "../function/memoize-accessor";
import Validator from "@dikac/t-validator/validator";
import {O} from "ts-toolbelt";

export default NotEmpty;

export class NotEmptyParameter<ValueType extends object, MessageType>
    implements
        NotEmptyType<ValueType, MessageType>
{
    readonly valid : boolean;
    #message : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType;
    readonly value : ValueType;

    constructor(
        value : ValueType,
        message : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType,
        // {
        //     value,
        //     message,
        // } : Value<ValueType> & Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>
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

export type NotEmptyType<ValueType extends object, MessageType> = Readonly<Value<ValueType> & Message<MessageType> & Validatable>;

export type NotEmptyArgument<
    ValueType extends object,
    MessageType
> = Value<ValueType> &
    Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>

export class NotEmptyObject<
    ValueType extends object,
    MessageType
> extends NotEmptyParameter<
    ValueType,
    MessageType
    > {

    constructor(
        {
            value,
            message,
        } : NotEmptyArgument<ValueType, MessageType>
    ) {
        super(value, message);
    }
}


namespace NotEmpty {

    export const Parameter = NotEmptyParameter;
    export const Object = NotEmptyObject;

    export type Type<
        ValueType extends object,
        MessageType
    > = NotEmptyType<
        ValueType,
        MessageType
    >

    export type Argument<
        ValueType extends object,
        MessageType
    > = NotEmptyArgument<
        ValueType,
        MessageType
    >;
}
