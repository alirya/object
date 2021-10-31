import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
export default Empty;
export declare class EmptyParameter<Type extends object, MessageType> implements EmptyType<Type, MessageType> {
    #private;
    readonly value: Type;
    readonly valid: boolean;
    constructor(value: Type, message: (value: Type, valid: boolean) => MessageType);
    get message(): MessageType;
}
export declare type EmptyArgument<Type extends object, MessageType> = Value<Type> & Message<(result: Readonly<Value<Type> & Validatable>) => MessageType>;
export declare type EmptyType<Type extends object, MessageType> = Readonly<Value<Type> & Message<MessageType> & Validatable>;
export declare class EmptyObject<Type extends object, MessageType> extends EmptyParameter<Type, MessageType> {
    constructor({ value, message }: EmptyArgument<Type, MessageType>);
}
declare namespace Empty {
    const Parameter: typeof EmptyParameter;
    const Object: typeof EmptyObject;
    type Type<ValueType extends object, MessageType> = EmptyType<ValueType, MessageType>;
    type Argument<ValueType extends object, MessageType> = EmptyArgument<ValueType, MessageType>;
}
