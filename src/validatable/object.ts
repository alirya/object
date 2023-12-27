import Callback from '@axiona/validator/validatable/callback.js';
import ObjectGuard from '../boolean/object.js';
import Return from '@axiona/validator/validatable/simple.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import Static from '@axiona/validator/message/function/static.js';
import Value from '@axiona/value/value.js';
import Message from '@axiona/message/message.js';


export function ObjectParameters<Argument, MessageType>(
    value : Argument,
    message : Static.Parameters<Argument, object, false, true, MessageType>
) : Return<Argument, object, MessageType> {

    return <Return<Argument, object, MessageType>> Callback.Parameters(value, ObjectGuard, message);
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
) : Return<Argument, object, MessageType/*Readonly<Instance<any, MessageType>>*/> {

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
