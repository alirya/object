import Validator from "@dikac/t-validator/validator";
import EmptyValidatable from "../validatable/empty";
import EmptyString from "../assert/string/empty";
import Dynamic from "@dikac/t-validator/message/function/dynamic";

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


//
// export function EmptyObject() : Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, string>>;
//
// export function EmptyObject<MessageType>(
//     message : (result:Readonly<Value<object> & Validatable>)=>MessageType
// ) : Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, MessageType>>;
//
//
// export function EmptyObject<MessageType>(
//     message : (result:Readonly<Value<object> & Validatable>)=>MessageType|string = EmptyString.Object
// ) : Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, MessageType>> {
//
//     return function (value) {
//
//         return new EmptyValidatable.Object({value, message});
//
//     } as Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, MessageType>>
// }
//

