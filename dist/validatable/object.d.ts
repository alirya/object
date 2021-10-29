import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Message from "@dikac/t-message/message";
export declare function ObjectParameter<MessageType, Argument>(value: Argument, message: (result: Readonly<Value<Argument> & Validatable>) => MessageType): Return<any, Argument, object, Readonly<Instance<any, MessageType>>>;
export declare type ObjectArgument<MessageType, Argument> = Value<Argument> & Message<(result: Readonly<Value<Argument> & Validatable>) => MessageType>;
export declare function ObjectObject<MessageType, Argument>({ value, message }: Value<Argument> & Message<(result: Readonly<Value<Argument> & Validatable>) => MessageType>): Return<any, Argument, object, Readonly<Instance<any, MessageType>>>;
