import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Dynamic from "@dikac/t-validator/message/function/dynamic";
export declare type NotEmptyType<ValueType extends object, MessageType> = Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
export default class NotEmptyParameters<ValueType extends object, MessageType> implements NotEmptyType<ValueType, MessageType> {
    #private;
    readonly valid: boolean;
    readonly value: ValueType;
    constructor(value: ValueType, message: Dynamic.Parameters<ValueType, MessageType>);
    get message(): MessageType;
}
