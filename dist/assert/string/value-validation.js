import Value from "./value";
export default function ValueValidation(
// valid : boolean,
// property : PropertyKey,
// type : string,
// validation : string,
{ valid, property, type, validation, }) {
    let message = Value({ valid, property, type });
    return `${message}, against "${validation}"`;
}
//# sourceMappingURL=value-validation.js.map