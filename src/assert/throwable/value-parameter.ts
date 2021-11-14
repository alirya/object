import Property from "../../property/property/property";
import ValueParameters from "./value-parameters";

// export default Value;
// namespace Value {
//
//     export const Parameter = ObjectParameter;
//     export const Object = ObjectObject;
//     export type Argument = ObjectArgument;
// }
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

export type ValueArgument = {type:string} & Property;

export default function ValueParameter(
    // property : PropertyKey,
    // type : string,
    {
        property,
        type
    } : ValueArgument
) : Error {

    return ValueParameters(property, type);
}
