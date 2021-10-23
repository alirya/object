export default function* Value(
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