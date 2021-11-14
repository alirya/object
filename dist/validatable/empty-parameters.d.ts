import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
export declare type EmptyType<Type extends object, MessageType> = Readonly<Value<Type> & Message<MessageType> & Validatable>;
export default class EmptyParameters<Type extends object, MessageType> implements EmptyType<Type, MessageType> {
    #private;
    readonly value: Type;
    readonly valid: boolean;
    constructor(value: Type, message: (value: Type, valid: boolean) => MessageType);
    get message(): MessageType;
}
