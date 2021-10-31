import { ReadableObject, ReadableParameter } from "./readable";
export default Readable;
var Readable;
(function (Readable) {
    Readable.Parameter = ReadableParameter;
    Readable.Object = ReadableObject;
})(Readable || (Readable = {}));
export function ValueParameter(object, property, validation) {
    return validation(object[property]);
}
export function ValueObject(object, 
// property : PropertyType,
// validation : (value:unknown)=>value is Type,
{ property, validation }) {
    return validation(object[property]);
}
//# sourceMappingURL=value.js.map