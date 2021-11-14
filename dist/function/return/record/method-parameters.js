/**
 * call an record of function or object, by using key from {@param argument} and it's value
 * as rest argument
 *
 * @param object
 * @param argument
 */
export default function MethodParameters(object, argument) {
    let result = {};
    for (const [property, value] of Object.entries(argument)) {
        result[property] = value[property](...value);
    }
    return result;
}
//# sourceMappingURL=method-parameters.js.map