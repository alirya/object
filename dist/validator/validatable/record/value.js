import IteratorValue from "../iterator/value";
export default function Value(
//value : ValueType,
//validators : Validators
{ value, validators }) {
    let object = {};
    for (const [key, validatable] of IteratorValue({ value, validators })) {
        object[key] = validatable;
    }
    return object;
}
//# sourceMappingURL=value.js.map