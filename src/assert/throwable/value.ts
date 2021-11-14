import ValueParameter, {ValueArgument} from "./value-parameter";
import ValueParameters from "./value-parameters";

namespace Value {

    export const Parameter = ValueParameter;
    export const Parameters = ValueParameters;
    export type Argument = ValueArgument;
}
export default Value;
//
// export function ValueParameter(
//     property : PropertyKey,
//     type : string,
//     // {
//     //     property,
//     //     type
//     // } : {type:string} & Property
// ) : Error {
//
//     return new Error(PropertyValueMessage.Parameter(property, false, type))
// }
//
// export type ValueArgument = {type:string} & Property;
//
// export function ValueObject(
//     // property : PropertyKey,
//     // type : string,
//     {
//         property,
//         type
//     } : {type:string} & Property
// ) : Error {
//
//     return ValueParameter(property, type);
// }
