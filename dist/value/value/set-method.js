export default SetMethod;
var SetMethod;
(function (SetMethod) {
    SetMethod.Parameter = SetMethodParameter;
    SetMethod.Object = SetMethodObject;
})(SetMethod || (SetMethod = {}));
/**
 * set {@param value} for getter value for {@param object}
 * should be used inside getter callback
 *
 * @param object
 *
 * @param property
 * getter key
 *
 * @param value
 * value tobe memoized
 *
 * @param writable
 *
 * @param configurable {@default true}
 */
export function SetMethodParameter(object, property, value, writable = true, configurable = true) {
    return Object.defineProperty(object, property, {
        value: () => value,
        writable,
        configurable
    })[property]();
}
export function SetMethodObject(
//object : This,
//property : keyof This,
//value : Type,
//writable : boolean = true,
//configurable : boolean = true,
{ object, property, value, writable = true, configurable = true, }) {
    return SetMethodParameter(object, property, value, writable, configurable);
}
//# sourceMappingURL=set-method.js.map