import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
export declare class NotEmptyParameter<ValueType extends object, MessageType> implements Readonly<Value<ValueType> & Message<MessageType> & Validatable> {
    #private;
    readonly valid: boolean;
    readonly value: ValueType;
    constructor(value: ValueType, message: (result: Readonly<Value<ValueType> & Validatable>) => MessageType);
    get message(): MessageType;
}
export declare type NotEmptyArgument<ValueType extends object, MessageType> = Value<ValueType> & Message<(result: Readonly<Value<ValueType> & Validatable>) => MessageType>;
export declare class NotEmptyObject<ValueType extends object, MessageType> extends NotEmptyParameter<ValueType, MessageType> {
    constructor({ value, message, }: NotEmptyArgument<ValueType, MessageType>);
}
