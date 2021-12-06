import Validator from "@dikac/t-validator/validator";
import NotEmptyValidatable from "../validatable/not-empty";
import NotEmptyString from "../assert/string/not-empty";
import Dynamic from "@dikac/t-validator/message/function/validatable";

export default function NotEmptyParameters<MessageType>() : Validator<object, object, boolean, boolean, NotEmptyValidatable.Type<object, string>>;

export default function NotEmptyParameters<MessageType>(
    message : Dynamic.Parameters<object, MessageType>
) : Validator<object, object, boolean, boolean, NotEmptyValidatable.Type<object, MessageType>>;

export default function NotEmptyParameters<MessageType>(
    message : Dynamic.Parameters<object, MessageType|string> = NotEmptyString.Parameters
) : Validator<object, object, boolean, boolean, NotEmptyValidatable.Type<object, MessageType>> {

    return function (value) {

        return new NotEmptyValidatable.Parameters(value, message);

    } as Validator<object, object, boolean, boolean, NotEmptyValidatable.Type<object, MessageType>>
}
