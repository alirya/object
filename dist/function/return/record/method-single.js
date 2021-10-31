/**
 * call an record of function or object, by using key from {@param argument} and it's value
 * as first argument
 *
 * @param object
 * @param argument
 */
export default MethodSingle;
var MethodSingle;
(function (MethodSingle) {
    MethodSingle.Parameter = MethodSingleParameter;
    MethodSingle.Object = MethodSingleObject;
})(MethodSingle || (MethodSingle = {}));
export function MethodSingleParameter(value, argument) {
    let result = {};
    for (const [property, value] of Object.entries(argument)) {
        result[property] = value[property](value);
    }
    return result;
}
export function MethodSingleObject(
// value : Type,
// argument : Argument,
{ value, argument, }) {
    return MethodSingleParameter(value, argument);
}
//# sourceMappingURL=method-single.js.map