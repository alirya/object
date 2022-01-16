import Value from '@alirya/value/value';
import Return from '@alirya/validator/validatable/simple';
import Instance from '@alirya/validator/validatable/validatable';
import Message from '@alirya/message/message';
import Static from '@alirya/validator/message/function/static-parameter';
import ObjectParameters from './object-parameters';

export type ObjectArgument<
    Argument,
    MessageType,
> =
    Value<Argument> &
    Message<Static<Argument, object, false, true, MessageType>>;

export default function ObjectParameter<Argument, MessageType>(
    {
        value,
        message
    } : ObjectArgument<Argument, MessageType>
) : Return<Argument, object, Readonly<Instance<any, MessageType>>> {

    return ObjectParameters(value, (value, valid) => message({value, valid}));
}
