export default SetGetter;
var SetGetter;
(function (SetGetter) {
    SetGetter.Parameter = SetGetterParameter;
    SetGetter.Object = SetGetterObject;
})(SetGetter || (SetGetter = {}));
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
 * @param configurable {@default true}
 */
export function SetGetterParameter(object, property, value, configurable = true) {
    return Object.defineProperty(object, property, {
        get: () => value,
        configurable: configurable
    })[property];
}
export function SetGetterObject(
// object : This,
// property : keyof This,
// value : Type,
// configurable : boolean = true,
{ object, property, value, configurable = true, }) {
    return Object.defineProperty(object, property, {
        get: () => value,
        configurable: configurable
    })[property];
}
//# sourceMappingURL=set-getter.js.map