import Validator from "@dikac/t-validator/validator";
import EmptyValidatable from "../validatable/empty";
import EmptyString from "../assert/string/empty";
import Dynamic from "@dikac/t-validator/message/function/validatable";
import EmptyParameters from "./empty-parameters";

export default function EmptyParameter() : Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, string>>;

export default function EmptyParameter<MessageType>(
    message : Dynamic.Parameter<object, MessageType>
) : Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, MessageType>>;


export default function EmptyParameter<MessageType>(
    message : Dynamic.Parameter<object, MessageType|string> = EmptyString.Parameter
) : Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, MessageType|string>> {


    return EmptyParameters((value, valid) => message({valid, value}))

}


