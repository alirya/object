export default function Value(value, validators) {
    let object = {};
    for (let property in validators) {
        const validator = validators[property];
        object[property] = validator(value);
    }
    return object;
}
//# sourceMappingURL=value.js.map