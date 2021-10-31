export default Method;
var Method;
(function (Method) {
    Method.Parameter = MethodParameter;
    Method.Object = MethodObject;
})(Method || (Method = {}));
/**
 * call an record of function or object, by using key from {@param argument} and it's value
 * as rest argument
 *
 * @param object
 * @param argument
 */
export function MethodParameter(object, argument) {
    let result = {};
    for (const [property, value] of Object.entries(argument)) {
        result[property] = value[property](...value);
    }
    return result;
}
export function MethodObject(
// value : Type,
// argument : Argument,
{ object, argument, }) {
    return MethodParameter(object, argument);
}
//# sourceMappingURL=method.js.map