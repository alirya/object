import ObjectValidatable from "../validatable/object";
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
export default function Object_(message) {
    return function (value) {
        return ObjectValidatable(value, message);
    };
}
//# sourceMappingURL=object.js.map