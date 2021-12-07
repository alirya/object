import Validator from "@dikac/t-validator/validator";
import NotEmptyValidatable, {NotEmptyType} from "../validatable/not-empty-parameters";
import NotEmptyString from "../assert/string/not-empty-parameters";
import Dynamic from "@dikac/t-validator/message/function/validatable";

export default function NotEmptyParameters<MessageType>() : Validator<object, object, boolean, boolean, NotEmptyType<object, string>>;

export default function NotEmptyParameters<MessageType>(
    message : Dynamic.Parameters<object, MessageType>
) : Validator<object, object, boolean, boolean, NotEmptyType<object, MessageType>>;

export default function NotEmptyParameters<MessageType>(
    message : Dynamic.Parameters<object, MessageType|string> = NotEmptyString
) : Validator<object, object, boolean, boolean, NotEmptyType<object, MessageType>> {

    return function (value) {

        return new NotEmptyValidatable(value, message);

    } as Validator<object, object, boolean, boolean, NotEmptyType<object, MessageType>>
}
