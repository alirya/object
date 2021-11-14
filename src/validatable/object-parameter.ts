import Value from "@dikac/t-value/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Message from "@dikac/t-message/message";
import Static from "@dikac/t-validator/message/function/static";
import ObjectParameters from "./object-parameters";
//
// export default Object_;
// namespace Object_ {
//
//     export const Parameter = ObjectParameter;
//     export const Object = ObjectObject;
//     export type Argument<MessageType, Argument> = ObjectArgument<MessageType, Argument>;
// }
//
// export function ObjectParameter<MessageType, Argument>(
//     value : Argument,
//     message : (result:Readonly<Value<Argument> & Validatable>)=>MessageType
// ) : Return<any, Argument, object, Readonly<Instance<any, MessageType>>> {
//
//     return <Return<any, Argument, object, Readonly<Instance<any, MessageType>>>> Callback.Function.Parameter(value, ObjectGuard, message);
// }

export type ObjectArgument<
    Argument,
    MessageType,
> =
    Value<Argument> &
    Message<Static.Parameter<any, Argument, object, false, true, MessageType>>;

export default function ObjectParameter<Argument, MessageType>(
    // value : Argument,
    // message : (result:Readonly<Value<Argument> & Validatable>)=>MessageType,
    {
        value,
        message
    } : ObjectArgument<Argument, MessageType>
) : Return<any, Argument, object, Readonly<Instance<any, MessageType>>> {

    return ObjectParameters(value, (value, valid) => message({value, valid}));
}
