import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
export default NotEmpty;
export declare class NotEmptyParameter<ValueType extends object, MessageType> implements NotEmptyType<ValueType, MessageType> {
    #private;
    readonly valid: boolean;
    readonly value: ValueType;
    constructor(value: ValueType, message: (result: Readonly<Value<ValueType> & Validatable>) => MessageType);
    get message(): MessageType;
}
export declare type NotEmptyType<ValueType extends object, MessageType> = Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
export declare type NotEmptyArgument<ValueType extends object, MessageType> = Value<ValueType> & Message<(result: Readonly<Value<ValueType> & Validatable>) => MessageType>;
export declare class NotEmptyObject<ValueType extends object, MessageType> extends NotEmptyParameter<ValueType, MessageType> {
    constructor({ value, message, }: NotEmptyArgument<ValueType, MessageType>);
}
declare namespace NotEmpty {
    const Parameter: typeof NotEmptyParameter;
    const Object: typeof NotEmptyObject;
    type Type<ValueType extends object, MessageType> = NotEmptyType<ValueType, MessageType>;
    type Argument<ValueType extends object, MessageType> = NotEmptyArgument<ValueType, MessageType>;
}
