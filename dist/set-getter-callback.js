import SetPropertyCallback from "./set-property-callback";
export default SetGetterCallback;
var SetGetterCallback;
(function (SetGetterCallback) {
    SetGetterCallback.Parameter = SetGetterCallbackParameter;
    SetGetterCallback.Object = SetGetterCallbackObject;
})(SetGetterCallback || (SetGetterCallback = {}));
export function SetGetterCallbackParameter(object, property, factory, configurable = true) {
    return SetPropertyCallback.Parameter(object, property, factory, false, configurable);
}
export function SetGetterCallbackObject({ object, property, factory, configurable, }) {
    return SetGetterCallbackParameter(object, property, factory, configurable);
}
//# sourceMappingURL=set-getter-callback.js.map