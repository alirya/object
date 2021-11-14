import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import NotEmptyArgument from "../boolean/not-empty";
import NotEmptyParameters from "./not-empty-parameters";
import Dynamic from "@dikac/t-validator/message/function/dynamic";

export type NotEmptyArgument<
    ValueType extends object,
    MessageType
> = Value<ValueType> &
    Message<Dynamic.Parameter<ValueType, MessageType>>

export default class NotEmptyParameter<
    ValueType extends object,
    MessageType
> extends NotEmptyParameters<
    ValueType,
    MessageType
    > {

    constructor(
        {
            value,
            message,
        } : NotEmptyArgument<ValueType, MessageType>
    ) {
        super(value, (value, valid) => message({value, valid}));
    }
}

