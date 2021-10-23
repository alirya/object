import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
export default function Object_(): Validator<unknown, object, Readonly<Instance<object, string>>>;
export default function Object_<MessageType>(message: (result: Readonly<Value> & Readonly<Validatable>) => MessageType): Validator<unknown, object, Readonly<Instance<object, MessageType>>>;
