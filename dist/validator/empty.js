import EmptyParameters from "./empty-parameters";
import EmptyParameter from "./empty-parameter";
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
var Empty;
(function (Empty) {
    Empty.Parameters = EmptyParameters;
    Empty.Parameter = EmptyParameter;
})(Empty || (Empty = {}));
export default Empty;
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
//
//
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
//# sourceMappingURL=empty.js.map