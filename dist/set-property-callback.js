import MemoizeGetter from "./value/value/set-property";
export default SetPropertyCallback;
var SetPropertyCallback;
(function (SetPropertyCallback) {
    SetPropertyCallback.Parameter = SetPropertyCallbackParameter;
    SetPropertyCallback.Object = SetPropertyCallbackObject;
})(SetPropertyCallback || (SetPropertyCallback = {}));
export function SetPropertyCallbackParameter(object, property, factory, writable = true, configurable = true) {
    return Object.defineProperty(object, property, {
        configurable: true,
        get() {
            return MemoizeGetter.Parameter(object, property, factory(), writable, configurable);
        }
    });
}
export function SetPropertyCallbackObject({ object, property, factory, writable, configurable, }) {
    return SetPropertyCallbackParameter(object, property, factory, writable, configurable);
}
//# sourceMappingURL=set-property-callback.js.map