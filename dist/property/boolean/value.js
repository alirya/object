export default function Value(object, 
// property : PropertyType,
// validation : (value:unknown)=>value is Type,
{ property, validation }) {
    return validation(object[property]);
}
//# sourceMappingURL=value.js.map