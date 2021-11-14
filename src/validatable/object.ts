import ObjectParameter, {ObjectArgument} from "./object-parameter";
import ObjectParameters from "./object-parameters";

namespace Object_ {

    export const Parameter = ObjectParameter;
    export const Parameters = ObjectParameters;
    export type Argument<MessageType, Argument> = ObjectArgument<MessageType, Argument>;
}
export default Object_;
//
// export function ObjectParameter<MessageType, Argument>(
//     value : Argument,
//     message : (result:Readonly<Value<Argument> & Validatable>)=>MessageType
// ) : Return<any, Argument, object, Readonly<Instance<any, MessageType>>> {
//
//     return <Return<any, Argument, object, Readonly<Instance<any, MessageType>>>> Callback.Function.Parameter(value, ObjectGuard, message);
// }
//
// export type ObjectArgument<
//     MessageType,
//     Argument
// > =
//     Value<Argument> &
//     Message<(result:Readonly<Value<Argument> & Validatable>)=>MessageType>;
//
// export function ObjectObject<MessageType, Argument>(
//     // value : Argument,
//     // message : (result:Readonly<Value<Argument> & Validatable>)=>MessageType,
//     {
//         value,
//         message
//     } : Value<Argument> & Message<(result:Readonly<Value<Argument> & Validatable>)=>MessageType>
// ) : Return<any, Argument, object, Readonly<Instance<any, MessageType>>> {
//
//     return ObjectParameter(value, message);
// }
