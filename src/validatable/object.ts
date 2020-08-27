import Callback from "@dikac/t-validator/validatable/callback";
import ObjectGuard from "../boolean/object";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function Object_<MessageT, Argument>(
    value : Argument,
    message : (result:Readonly<Value<Argument> & Validatable>)=>MessageT
) : Return<any, Argument, object, Readonly<Instance<any, MessageT>>> {

    return <Return<any, Argument, object, Readonly<Instance<any, MessageT>>>> Callback(value, ObjectGuard, message);
}
