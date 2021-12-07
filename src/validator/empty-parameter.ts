import Validator from "@dikac/t-validator/validator";
import EmptyValidatable, {EmptyType} from "../validatable/empty-parameters";
import EmptyString from "../assert/string/empty-parameter";
import Dynamic from "@dikac/t-validator/message/function/validatable";
import EmptyParameters from "./empty-parameters";

export default function EmptyParameter() : Validator<object, object, boolean, boolean, EmptyType<object, string>>;

export default function EmptyParameter<MessageType>(
    message : Dynamic.Parameter<object, MessageType>
) : Validator<object, object, boolean, boolean, EmptyType<object, MessageType>>;


export default function EmptyParameter<MessageType>(
    message : Dynamic.Parameter<object, MessageType|string> = EmptyString
) : Validator<object, object, boolean, boolean, EmptyType<object, MessageType|string>> {


    return EmptyParameters((value, valid) => message({valid, value}))

}


