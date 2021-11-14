import FromObjectParameters from "./from-object-parameters";
import FromObjectParameter, {FromObjectArgument} from "./from-object-parameter";

namespace FromObject {

    export const Parameters = FromObjectParameters;
    export const Parameter = FromObjectParameter;
    export type Argument = FromObjectArgument;
}
export default FromObject;
//
// export function FromObjectParameter(value : object, property : PropertyKey) : undefined|PropertyDescriptor {
//
//     // direct
//     {
//         let descriptor = Object.getOwnPropertyDescriptor(value, property);
//
//         if(descriptor) {
//
//             return descriptor;
//         }
//     }
//
//     // prototype chain
//     {
//         for(value = Object.getPrototypeOf(value); value; value = Object.getPrototypeOf(value)) {
//
//             let descriptor = Object.getOwnPropertyDescriptor(value, property);
//
//             if(descriptor) {
//
//                 return descriptor;
//             }
//         }
//     }
// }
//
// export type FromObjectArgument = Value<object> & Property;
//
// export function FromObjectObject(
//     {value, property} : FromObjectArgument
// ) : undefined|PropertyDescriptor {
//
//     return FromObjectParameter(value, property);
// }
