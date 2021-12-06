import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Static from "@dikac/t-validator/message/function/static";
export default function ObjectParameters<Argument, MessageType>(value: Argument, message: Static.Parameters<Argument, object, false, true, MessageType>): Return<Argument, object, Readonly<Instance<any, MessageType>>>;
