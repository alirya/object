/**
 * call an record of function or object, by using key from {@param argument} and it's value
 * as first argument
 *
 * @param value
 * @param argument
 */
export default function MethodSingleParameters(value, argument) {
    let result = {};
    for (const [property, value] of Object.entries(argument)) {
        result[property] = value[property](value);
    }
    return result;
}
//# sourceMappingURL=method-single-parameters.js.map