import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import ObjectValidatable from "../validatable/object";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";
import {A} from "ts-toolbelt";
import ObjectString from "../validatable/string/object";
//
// export default class Object_<MessageType>
//     implements
//         Validator<unknown, object, Readonly<Instance<object, MessageType>>>,
//         Message<(result:Readonly<Value> & Readonly<Validatable>)=>MessageType>
// {
//     constructor(
//        public message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageType
//     ) {
//     }
//
//     validate<Argument extends object>(value: Argument): Readonly<Instance<Argument, MessageType, true>>
//     validate<Argument extends unknown>(value: Argument): Return<any, Argument, object, Readonly<Instance<object, MessageType>>>
//     validate<Argument extends unknown>(value: Argument) {
//
//         return  ObjectValidatable<MessageType, Argument>(value, this.message);
//     }
// }

export default function Object_() : Validator<unknown, object, Readonly<Instance<object, string>>>;

export default function Object_<MessageType>(
    message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageType
) : Validator<unknown, object, Readonly<Instance<object, MessageType>>>;

export default function Object_<MessageType>(
    message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageType|string = ObjectString
) : Validator<unknown, object, Readonly<Instance<object, MessageType>>> {

    return function (value ) {

        return  ObjectValidatable(value, message);

    } as Validator<unknown, object, Readonly<Instance<object, MessageType>>>
}
