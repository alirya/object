import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
export default class Empty<Type extends object, MessageType> implements Readonly<Value<Type> & Message<MessageType> & Validatable> {
    #private;
    readonly valid: boolean;
    readonly value: Type;
    constructor({ value, message }: Value<Type> & Message<(result: Readonly<Value<Type> & Validatable>) => MessageType>);
    get message(): MessageType;
}
