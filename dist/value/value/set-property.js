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
export default SetProperty;
var SetProperty;
(function (SetProperty) {
    SetProperty.Parameter = SetPropertyParameter;
    SetProperty.Object = SetPropertyObject;
})(SetProperty || (SetProperty = {}));
export function SetPropertyParameter(object, property, value, writable = true, configurable = true) {
    return Object.defineProperty(object, property, {
        value,
        writable,
        configurable
    })[property];
}
export function SetPropertyObject(
//object : This,
//property : keyof This,
//value : Type,
//writable : boolean = true,
//configurable : boolean = true,
{ object, property, value, writable = true, configurable = true, }) {
    return SetPropertyParameter(object, property, value, writable, configurable);
}
//# sourceMappingURL=set-property.js.map