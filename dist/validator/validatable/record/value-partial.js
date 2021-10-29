import IteratorValue from "../iterator/value";
export default ValuePartial;
var ValuePartial;
(function (ValuePartial) {
    ValuePartial.Parameter = ValuePartialParameter;
    ValuePartial.Object = ValuePartialObject;
})(ValuePartial || (ValuePartial = {}));
export function ValuePartialParameter(value, validators, stop = false) {
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
export function ValuePartialObject(
// value : ValueType,
// validators : Validators,
// stop : boolean = false,
{ value, validators, stop = false, }) {
    return ValuePartialParameter(value, validators, stop);
}
//# sourceMappingURL=value-partial.js.map