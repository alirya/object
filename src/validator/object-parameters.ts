import Validator from "@dikac/t-validator/simple";
import ObjectValidatable from "../validatable/object";
import Instance from "@dikac/t-validator/validatable/validatable";
import ObjectString from "../assert/string/object";
import Simple from "@dikac/t-validator/message/function/simple";

export default function ObjectParameters() : Validator<unknown, object, Readonly<Instance<object, string>>>;

export default function ObjectParameters<MessageType>(
    message : Simple.Parameters<unknown, object, MessageType>
) : Validator<unknown, object, Readonly<Instance<object, MessageType>>>;

export default function ObjectParameters<MessageType>(
    message : Simple.Parameters<unknown, object, MessageType|string> = ObjectString.Parameters
) : Validator<unknown, object, Readonly<Instance<object, MessageType>>> {

    return function (value ) {

        return  ObjectValidatable.Parameters(value, message);

    } as Validator<unknown, object, Readonly<Instance<object, MessageType>>>
}
