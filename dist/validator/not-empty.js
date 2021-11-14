import NotEmptyParameters from "./not-empty-parameters";
import NotEmptyParameter from "./not-empty-parameter";
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
// export default function NotEmpty<MessageType>() : Validator<object, object, boolean, boolean, NotEmptyValidatable.Type<object, string>>;
//
// export default function NotEmpty<MessageType>(
//     message : (result:Readonly<Value<object> & Validatable>)=>MessageType
// ) : Validator<object, object, boolean, boolean, NotEmptyValidatable.Type<object, MessageType>>;
//
// export default function NotEmpty<MessageType>(
//     message : (result:Readonly<Value<object> & Validatable>)=>MessageType|string = NotEmptyString.Object
// ) : Validator<object, object, boolean, boolean, NotEmptyValidatable.Type<object, MessageType>> {
//
//     return function (value) {
//
//         return new NotEmptyValidatable.Parameter(value, message);
//
//     } as Validator<object, object, boolean, boolean, NotEmptyValidatable.Type<object, MessageType>>
// }
var NotEmpty;
(function (NotEmpty) {
    NotEmpty.Parameters = NotEmptyParameters;
    NotEmpty.Parameter = NotEmptyParameter;
})(NotEmpty || (NotEmpty = {}));
export default NotEmpty;
//# sourceMappingURL=not-empty.js.map