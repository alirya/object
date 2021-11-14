import Validator from "@dikac/t-validator/validator";
import EmptyValidatable from "../validatable/empty";
import EmptyString from "../assert/string/empty";
import Dynamic from "@dikac/t-validator/message/function/dynamic";
import EmptyParameters from "./empty-parameters";

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
//
// export function EmptyParameter() : Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, string>>;
//
// export function EmptyParameter<MessageType>(
//     message : (value: object, valid: boolean)=>MessageType
// ) : Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, MessageType>>;
//
//
// export function EmptyParameter<MessageType>(
//     message : (value: object, valid: boolean)=>MessageType|string = EmptyString.Parameter
// ) : Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, MessageType>> {
//
//     return function (value) {
//
//         return new EmptyValidatable.Parameter(value, message);
//
//     } as Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, MessageType>>
// }



export default function EmptyParameter() : Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, string>>;

export default function EmptyParameter<MessageType>(
    message : Dynamic.Parameter<object, MessageType>
) : Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, MessageType>>;


export default function EmptyParameter<MessageType>(
    message : Dynamic.Parameter<object, MessageType|string> = EmptyString.Parameter
) : Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, MessageType|string>> {


    return EmptyParameters((value, valid) => message({valid, value}))

}


