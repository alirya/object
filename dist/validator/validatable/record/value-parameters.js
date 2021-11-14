import IteratorValue from "../iterator/value";
export default function ValueParameters(value, validators) {
    let object = {};
    for (const [key, validatable] of IteratorValue.Parameters(value, validators)) {
        object[key] = validatable;
    }
    return object;
}
//# sourceMappingURL=value-parameters.js.map