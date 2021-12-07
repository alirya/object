import Validator from "@dikac/t-validator/validator";
import EmptyValidatable, {EmptyType} from "../validatable/empty-parameters";
import EmptyString from "../assert/string/empty-parameters";
import Dynamic from "@dikac/t-validator/message/function/validatable";


export default function EmptyParameters() : Validator<object, object, boolean, boolean, EmptyType<object, string>>;

export default function EmptyParameters<MessageType>(
    message : Dynamic.Parameters<object, MessageType>
) : Validator<object, object, boolean, boolean, EmptyType<object, MessageType>>;


export default function EmptyParameters<MessageType>(
    message : Dynamic.Parameters<object, MessageType|string> = EmptyString
) : Validator<object, object, boolean, boolean, EmptyType<object, MessageType>> {

    return function (value) {

        return new EmptyValidatable(value, message);

    } as Validator<object, object, boolean, boolean, EmptyType<object, MessageType>>
}


