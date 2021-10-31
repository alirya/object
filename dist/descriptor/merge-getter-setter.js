export default MergeGetterSetter;
var MergeGetterSetter;
(function (MergeGetterSetter) {
    MergeGetterSetter.Parameter = MergeGetterSetterParameter;
    MergeGetterSetter.Object = MergeGetterSetterMergeGetterSetter;
})(MergeGetterSetter || (MergeGetterSetter = {}));
export function MergeGetterSetterParameter(destination, source) {
    if (typeof source.get === "function") {
        destination.get = source.get;
    }
    if (typeof source.set === "function") {
        destination.set = source.set;
    }
    return destination;
}
export function MergeGetterSetterMergeGetterSetter({ destination, source }) {
    return MergeGetterSetterParameter(destination, source);
}
//# sourceMappingURL=merge-getter-setter.js.map