export default Value;
var Value;
(function (Value) {
    Value.Parameter = ValueParameter;
    Value.Object = ValueObject;
})(Value || (Value = {}));
export function* ValueParameter(value, validators) {
    let object = {};
    for (let property in validators) {
        const validator = validators[property];
        yield [
            object[property],
            validator(value)
        ];
    }
}
export function* ValueObject(
//value : ValueType,
//validators : Validators,
{ value, validators }) {
    let object = {};
    for (let property in validators) {
        const validator = validators[property];
        yield [
            object[property],
            validator(value)
        ];
    }
}
//# sourceMappingURL=value.js.map