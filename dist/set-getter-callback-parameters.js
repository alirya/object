import SetPropertyCallback from "./set-property-callback";
export default function SetGetterCallbackParameters(object, property, factory, configurable = true) {
    return SetPropertyCallback.Parameters(object, property, factory, false, configurable);
}
//# sourceMappingURL=set-getter-callback-parameters.js.map