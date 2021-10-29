import Callback from "@dikac/t-validator/validatable/callback";
import ObjectGuard from "../boolean/object";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Message from "@dikac/t-message/message";
import Validator from "@dikac/t-validator/validator";
import {O} from "ts-toolbelt";

export function ObjectParameter<MessageType, Argument>(
    value : Argument,
    message : (result:Readonly<Value<Argument> & Validatable>)=>MessageType
) : Return<any, Argument, object, Readonly<Instance<any, MessageType>>> {

    return <Return<any, Argument, object, Readonly<Instance<any, MessageType>>>> Callback({value, validation:ObjectGuard, message});
}

namespace Object_ {

    export const Parameter = ObjectParameter;
    export const Object = ObjectObject;
    export type Argument<MessageType, Argument> = ObjectArgument<MessageType, Argument>;
}


export type ObjectArgument<
    MessageType,
    Argument
> =
    Value<Argument> &
    Message<(result:Readonly<Value<Argument> & Validatable>)=>MessageType>;

export function ObjectObject<MessageType, Argument>(
    // value : Argument,
    // message : (result:Readonly<Value<Argument> & Validatable>)=>MessageType,
    {
        value,
        message
    } : Value<Argument> & Message<(result:Readonly<Value<Argument> & Validatable>)=>MessageType>
) : Return<any, Argument, object, Readonly<Instance<any, MessageType>>> {

    return <Return<any, Argument, object, Readonly<Instance<any, MessageType>>>> Callback({value, validation:ObjectGuard, message});
}
