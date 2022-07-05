import Callback from '@alirya/validator/validatable/callback';
import ObjectGuard from '../boolean/object';
import Return from '@alirya/validator/validatable/simple';
import Instance from '@alirya/validator/validatable/validatable';
import Static from '@alirya/validator/message/function/static';
import Value from '@alirya/value/value';
import Message from '@alirya/message/message';


export function ObjectParameters<Argument, MessageType>(
    value : Argument,
    message : Static.Parameters<Argument, object, false, true, MessageType>
) : Return<Argument, object, Readonly<Instance<any, MessageType>>> {

    return <Return<Argument, object, Readonly<Instance<any, MessageType>>>> Callback.Parameters(value, ObjectGuard, message);
}


export type ObjectArgument<
    Argument,
    MessageType,
> =
    Value<Argument> &
    Message<Static.Parameter<Argument, object, false, true, MessageType>>;

export function ObjectParameter<Argument, MessageType>(
    {
        value,
        message
    } : ObjectArgument<Argument, MessageType>
) : Return<Argument, object, Readonly<Instance<any, MessageType>>> {

    return ObjectParameters(value, (value, valid) => message({value, valid}));
}


namespace Object {
    export const Parameters = ObjectParameters;
    export const Parameter = ObjectParameter;
    export type Argument<
        Argument,
        MessageType,
    > = ObjectArgument<
        Argument,
        MessageType
    >;
}
export default Object;
