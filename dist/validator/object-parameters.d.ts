import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Simple from "@dikac/t-validator/message/function/simple";
export default function ObjectParameters(): Validator<unknown, object, Readonly<Instance<object, string>>>;
export default function ObjectParameters<MessageType>(message: Simple.Parameters<unknown, object, MessageType>): Validator<unknown, object, Readonly<Instance<object, MessageType>>>;
