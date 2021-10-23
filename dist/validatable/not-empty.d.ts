import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
export default class NotEmpty<ValueType extends object, MessageType> implements Readonly<Value<ValueType> & Message<MessageType> & Validatable> {
    #private;
    readonly valid: boolean;
    readonly value: ValueType;
    constructor({ value, message, }: Value<ValueType> & Message<(result: Readonly<Value<ValueType> & Validatable>) => MessageType>);
    get message(): MessageType;
}
