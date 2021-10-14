export default function Map(values, validators) {
    let object = {};
    for (let property in validators) {
        const validator = validators[property];
        const value = values[property];
        object[property] = validator(value);
    }
    return object;
}
//# sourceMappingURL=map.js.map