export default function FromObjectParameters(value, property) {
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
//# sourceMappingURL=from-object-parameters.js.map