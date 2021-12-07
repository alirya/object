import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import ObjectString from "../assert/string/object-parameter";
import Simple from "@dikac/t-validator/message/function/simple";
import ObjectParameters from "./object-parameters";

export default function ObjectParameter() : Validator<unknown, object, Readonly<Instance<object, string>>>;

export default function ObjectParameter<MessageType>(
    message : Simple.Parameter<unknown, object, MessageType>
) : Validator<unknown, object, Readonly<Instance<object, MessageType>>>;

export default function ObjectParameter<MessageType>(
    message : Simple.Parameter<unknown, object, MessageType|string> = ObjectString
) : Validator<unknown, object, Readonly<Instance<object, MessageType|string>>> {

    if(message) {

        return ObjectParameters((value, valid) => message({value, valid}));

    } else {

        return ObjectParameters();
    }

}
