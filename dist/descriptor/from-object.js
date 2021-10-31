export default FromObject;
var FromObject;
(function (FromObject) {
    FromObject.Parameter = FromObjectParameter;
    FromObject.Object = FromObjectObject;
})(FromObject || (FromObject = {}));
export function FromObjectParameter(value, property) {
    // direct
    {
        let descriptor = Object.getOwnPropertyDescriptor(value, property);
        if (descriptor) {
            return descriptor;
        }
    }
    // prototype chain
    {
        for (value = Object.getPrototypeOf(value); value; value = Object.getPrototypeOf(value)) {
            let descriptor = Object.getOwnPropertyDescriptor(value, property);
            if (descriptor) {
                return descriptor;
            }
        }
    }
}
export function FromObjectObject({ value, property }) {
    return FromObjectParameter(value, property);
}
//# sourceMappingURL=from-object.js.map