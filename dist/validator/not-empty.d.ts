import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import NotEmptyValidatable from "../validatable/not-empty";
export default function NotEmpty<MessageType>(message: (result: Readonly<Value<object> & Validatable>) => MessageType): Validator<object, object, boolean, boolean, NotEmptyValidatable<object, MessageType>>;
