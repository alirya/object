import ValidateValuePartial from "./validatable/record/value-partial";
import ValueCallback from "./value-callback";
export default function ValuePartialParameters(validators, validation, message, stop = false) {
    return ValueCallback.Parameters(validators, (value, validators) => ValidateValuePartial.Parameters(value, validators, stop), validation, message);
}
//# sourceMappingURL=value-partial-parameters.js.map