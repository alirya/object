import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import EmptyValidatable from "../validatable/empty";
export default function Empty<MessageType>(message: (result: Readonly<Value<object> & Validatable>) => MessageType): Validator<object, object, boolean, boolean, EmptyValidatable<object, MessageType>>;
