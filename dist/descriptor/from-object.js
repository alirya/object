import FromObjectParameters from "./from-object-parameters";
import FromObjectParameter from "./from-object-parameter";
var FromObject;
(function (FromObject) {
    FromObject.Parameters = FromObjectParameters;
    FromObject.Parameter = FromObjectParameter;
})(FromObject || (FromObject = {}));
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
//# sourceMappingURL=from-object.js.map