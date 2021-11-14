import Validator from "@dikac/t-validator/validator";
import EmptyValidatable from "../validatable/empty";
import Dynamic from "@dikac/t-validator/message/function/dynamic";
export default function EmptyParameter(): Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, string>>;
export default function EmptyParameter<MessageType>(message: Dynamic.Parameter<object, MessageType>): Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, MessageType>>;
