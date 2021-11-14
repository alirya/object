import EmptyValidatable from "../validatable/empty";
import EmptyString from "../assert/string/empty";
export default function EmptyParameters(message = EmptyString.Parameters) {
    return function (value) {
        return new EmptyValidatable.Parameters(value, message);
    };
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
//# sourceMappingURL=empty-parameters.js.map