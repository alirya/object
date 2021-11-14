import ValueParameter from "./value-parameter";
import ValueParameters from "./value-parameters";
var Value;
(function (Value) {
    Value.Parameter = ValueParameter;
    Value.Parameters = ValueParameters;
})(Value || (Value = {}));
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
//# sourceMappingURL=value.js.map