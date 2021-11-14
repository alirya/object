import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Simple from "@dikac/t-validator/message/function/simple";
export default function ObjectParameter(): Validator<unknown, object, Readonly<Instance<object, string>>>;
export default function ObjectParameter<MessageType>(message: Simple.Parameter<unknown, object, MessageType>): Validator<unknown, object, Readonly<Instance<object, MessageType>>>;
