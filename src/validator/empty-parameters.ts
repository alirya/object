import Validator from "@dikac/t-validator/validator";
import EmptyValidatable from "../validatable/empty";
import EmptyString from "../assert/string/empty";
import Dynamic from "@dikac/t-validator/message/function/dynamic";


export default function EmptyParameters() : Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, string>>;

export default function EmptyParameters<MessageType>(
    message : Dynamic.Parameters<object, MessageType>
) : Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, MessageType>>;


export default function EmptyParameters<MessageType>(
    message : Dynamic.Parameters<object, MessageType|string> = EmptyString.Parameters
) : Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, MessageType>> {

    return function (value) {

        return new EmptyValidatable.Parameters(value, message);

    } as Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, MessageType>>
}


