import Validator from "@dikac/t-validator/simple";
import ObjectValidatable from "../validatable/object";
import Instance from "@dikac/t-validator/validatable/dynamic";
import ObjectString from "../assert/string/object";
import Simple from "@dikac/t-validator/message/function/simple";
import ObjectParameters from "./object-parameters";
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

export default function ObjectParameter() : Validator<unknown, object, Readonly<Instance<object, string>>>;

export default function ObjectParameter<MessageType>(
    message : Simple.Parameter<unknown, object, MessageType>
) : Validator<unknown, object, Readonly<Instance<object, MessageType>>>;

export default function ObjectParameter<MessageType>(
    message : Simple.Parameter<unknown, object, MessageType|string> = ObjectString.Parameter
) : Validator<unknown, object, Readonly<Instance<object, MessageType|string>>> {

    if(message) {

        return ObjectParameters((value, valid) => message({value, valid}));

    } else {

        return ObjectParameters();
    }

}
