export default function ValueParameter(object, 
// property : PropertyType,
// validation : (value:unknown)=>value is Type,
{ property, validation }) {
    return validation(object[property]);
}
//# sourceMappingURL=value-parameter.js.map