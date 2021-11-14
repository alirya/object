import Validator from "@dikac/t-validator/validator";
import NotEmptyValidatable from "../validatable/not-empty";
import NotEmptyString from "../assert/string/not-empty";
import Dynamic from "@dikac/t-validator/message/function/dynamic";
import NotEmptyParameters from "./not-empty-parameters";

// export default class NotEmptyz<MessageType>
//     implements
//         Validator<object, object, boolean, boolean, NotEmptyValidatable<object, MessageType>>,
//         Message<(result:Readonly<Value & Validatable>)=>MessageType>
// {
//     constructor(
//        public message : (result:Readonly<Value<object> & Validatable>)=>MessageType
//     ) {
//     }
//
//     validate<Argument extends object>(value: Argument): Return<object, Argument, object, NotEmptyValidatable<Argument, MessageType>> {
//
//         return <Return<object, Argument, object,  NotEmptyValidatable<Argument, MessageType>>> new NotEmptyValidatable<Argument, MessageType>(value, this.message);
//     }
// }
export default function NotEmptyParameter<MessageType>() : Validator<object, object, boolean, boolean, NotEmptyValidatable.Type<object, string>>;

export default function NotEmptyParameter<MessageType>(
    message : Dynamic.Parameter<object, MessageType>
) : Validator<object, object, boolean, boolean, NotEmptyValidatable.Type<object, MessageType>>;

export default function NotEmptyParameter<MessageType>(
    message : Dynamic.Parameter<object, MessageType|string> = NotEmptyString.Parameter
) : Validator<object, object, boolean, boolean, NotEmptyValidatable.Type<object, MessageType|string>> {

    return NotEmptyParameters((value, valid) => message({valid, value}));

}
