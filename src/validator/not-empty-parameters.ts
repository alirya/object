import Validator from "@dikac/t-validator/validator";
import NotEmptyValidatable from "../validatable/not-empty";
import NotEmptyString from "../assert/string/not-empty";
import Dynamic from "@dikac/t-validator/message/function/dynamic";

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
