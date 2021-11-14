import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import NotEmptyParameters from "./not-empty-parameters";
import Dynamic from "@dikac/t-validator/message/function/dynamic";
export declare type NotEmptyArgument<ValueType extends object, MessageType> = Value<ValueType> & Message<Dynamic.Parameter<ValueType, MessageType>>;
export default class NotEmptyParameter<ValueType extends object, MessageType> extends NotEmptyParameters<ValueType, MessageType> {
    constructor({ value, message, }: NotEmptyArgument<ValueType, MessageType>);
}
