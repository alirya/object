import Value from '@alirya/value/value';
import Message from '@alirya/message/message';
import NotEmptyArgument from '../boolean/not-empty';
import NotEmptyParameters from './not-empty-parameters';
import Dynamic from '@alirya/validator/message/function/validatable-parameter';

export type NotEmptyArgument<
    ValueType extends object,
    MessageType
> = Value<ValueType> &
    Message<Dynamic<ValueType, MessageType>>;

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

