import IteratorValue from "../iterator/value";
export default Value;
var Value;
(function (Value) {
    Value.Parameter = ValueParameter;
    Value.Object = ValueObject;
})(Value || (Value = {}));
export function ValueParameter(value, validators) {
    let object = {};
    for (const [key, validatable] of IteratorValue.Parameter(value, validators)) {
        object[key] = validatable;
    }
    return object;
}
export function ValueObject({ value, validators }) {
    return ValueParameter(value, validators);
}
//# sourceMappingURL=value.js.map