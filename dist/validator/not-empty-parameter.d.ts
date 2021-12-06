import Validator from "@dikac/t-validator/validator";
import NotEmptyValidatable from "../validatable/not-empty";
import Dynamic from "@dikac/t-validator/message/function/validatable";
export default function NotEmptyParameter<MessageType>(): Validator<object, object, boolean, boolean, NotEmptyValidatable.Type<object, string>>;
export default function NotEmptyParameter<MessageType>(message: Dynamic.Parameter<object, MessageType>): Validator<object, object, boolean, boolean, NotEmptyValidatable.Type<object, MessageType>>;
