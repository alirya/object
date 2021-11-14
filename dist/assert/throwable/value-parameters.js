import PropertyValueMessage from "../string/value";
// export default Value;
// namespace Value {
//
//     export const Parameter = ObjectParameter;
//     export const Object = ObjectObject;
//     export type Argument = ObjectArgument;
// }
export default function ValueParameters(property, type) {
    return new Error(PropertyValueMessage.Parameters(property, false, type));
}
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
//# sourceMappingURL=value-parameters.js.map