import ValidatableValueCallback from "../validatable/value-callback";
export default function ValueCallback({ validators, map, validation, message, }) {
    return function (value) {
        return new ValidatableValueCallback({ value, validators, map, validation, message });
    };
}
//# sourceMappingURL=value-callback.js.map