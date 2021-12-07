import PropertyValueMessage from "../string/value-parameters";


// export default Value;
// namespace Value {
//
//     export const Parameter = ObjectParameter;
//     export const Object = ObjectObject;
//     export type Argument = ObjectArgument;
// }

export default function ValueParameters(
    property : PropertyKey,
    type : string,
    // {
    //     property,
    //     type
    // } : {type:string} & Property
) : Error {

    return new Error(PropertyValueMessage(property, false, type))
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
