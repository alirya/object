import ObjectParameters from "./object-parameters";
import ObjectParameter from "./object-parameter";
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
//
// export default function Object_() : Validator<unknown, object, Readonly<Instance<object, string>>>;
//
// export default function Object_<MessageType>(
//     message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageType
// ) : Validator<unknown, object, Readonly<Instance<object, MessageType>>>;
//
// export default function Object_<MessageType>(
//     message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageType|string = ObjectString.Object
// ) : Validator<unknown, object, Readonly<Instance<object, MessageType>>> {
//
//     return function (value ) {
//
//         return  ObjectValidatable.Parameter(value, message);
//
//     } as Validator<unknown, object, Readonly<Instance<object, MessageType>>>
// }
var Object_;
(function (Object_) {
    Object_.Parameters = ObjectParameters;
    Object_.Parameter = ObjectParameter;
})(Object_ || (Object_ = {}));
export default Object_;
//# sourceMappingURL=object.js.map