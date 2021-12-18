import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import ObjectGuard from "../boolean/object";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Static from "@dikac/t-validator/message/function/static-parameters";


export default function ObjectParameters<Argument, MessageType>(
    value : Argument,
    message : Static<Argument, object, false, true, MessageType>
) : Return<Argument, object, Readonly<Instance<any, MessageType>>> {

    return <Return<Argument, object, Readonly<Instance<any, MessageType>>>> Callback(value, ObjectGuard, message);
}
