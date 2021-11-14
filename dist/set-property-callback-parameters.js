import MemoizeGetter from "./value/value/set-property";
export default function SetPropertyCallbackParameters(object, property, factory, writable = true, configurable = true) {
    return Object.defineProperty(object, property, {
        configurable: true,
        get() {
            return MemoizeGetter.Parameters(object, property, factory(), writable, configurable);
        }
    });
}
//# sourceMappingURL=set-property-callback-parameters.js.map