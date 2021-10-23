import IteratorValue from "../iterator/value";
export default function ValuePartial(
// value : ValueType,
// validators : Validators,
// stop : boolean = false,
{ value, validators, stop = false, }) {
    let object = {};
    for (const [key, validatable] of IteratorValue({ value, validators })) {
        //const validator = validators[property];
        object[key] = validatable;
        if (validatable.valid === stop) {
            return object;
        }
    }
    return object;
}
//# sourceMappingURL=value-partial.js.map