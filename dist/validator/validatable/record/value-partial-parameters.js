import IteratorValue from "../iterator/value";
export default function ValuePartialParameters(value, validators, stop = false) {
    let object = {};
    for (const [key, validatable] of IteratorValue.Parameters(value, validators)) {
        //const validator = validators[property];
        object[key] = validatable;
        if (validatable.valid === stop) {
            return object;
        }
    }
    return object;
}
//# sourceMappingURL=value-partial-parameters.js.map