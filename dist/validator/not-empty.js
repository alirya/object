import NotEmptyValidatable from "../validatable/not-empty";
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
export default function NotEmpty(message) {
    return function (value) {
        return new NotEmptyValidatable(value, message);
    };
}
//# sourceMappingURL=not-empty.js.map