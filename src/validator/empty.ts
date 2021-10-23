import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import EmptyValidatable from "../validatable/empty";
import EmptyString from "../validatable/string/empty";

// export default class Empty<MessageType>
//     implements
//         Validator<object, object, boolean, boolean, EmptyValidatable<object, MessageType>>,
//         Message<(result:Readonly<Value<object> & Validatable>)=>MessageType>
// {
//     constructor(
//        public message : (result:Readonly<Value<object> & Validatable>)=>MessageType
//     ) {
//     }
//
//     validate<Argument extends object>(value: Argument) : EmptyValidatable<Argument, MessageType>   {
//
//         return new EmptyValidatable<Argument, MessageType>(value, this.message);
//     }
// }

export default function Empty() : Validator<object, object, boolean, boolean, EmptyValidatable<object, string>>;


export default function Empty<MessageType>(
    message : (result:Readonly<Value<object> & Validatable>)=>MessageType
) : Validator<object, object, boolean, boolean, EmptyValidatable<object, MessageType>>;


export default function Empty<MessageType>(
    message : (result:Readonly<Value<object> & Validatable>)=>MessageType|string = EmptyString
) : Validator<object, object, boolean, boolean, EmptyValidatable<object, MessageType>> {

    return function (value) {

        return new EmptyValidatable({value, message});

    } as Validator<object, object, boolean, boolean, EmptyValidatable<object, MessageType>>
}
