import Validator from "@dikac/t-validator/validator";
import NotEmptyValidatable from "../validatable/not-empty";
import NotEmptyString from "../assert/string/not-empty";
import Dynamic from "@dikac/t-validator/message/function/validatable";
import NotEmptyParameters from "./not-empty-parameters";

export default function NotEmptyParameter<MessageType>() : Validator<object, object, boolean, boolean, NotEmptyValidatable.Type<object, string>>;

export default function NotEmptyParameter<MessageType>(
    message : Dynamic.Parameter<object, MessageType>
) : Validator<object, object, boolean, boolean, NotEmptyValidatable.Type<object, MessageType>>;

export default function NotEmptyParameter<MessageType>(
    message : Dynamic.Parameter<object, MessageType|string> = NotEmptyString.Parameter
) : Validator<object, object, boolean, boolean, NotEmptyValidatable.Type<object, MessageType|string>> {

    return NotEmptyParameters((value, valid) => message({valid, value}));

}
