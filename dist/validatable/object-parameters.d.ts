import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Static from "@dikac/t-validator/message/function/static";
export default function ObjectParameters<Argument, MessageType>(value: Argument, message: Static.Parameters<any, Argument, object, false, true, MessageType>): Return<any, Argument, object, Readonly<Instance<any, MessageType>>>;
