import Value from "./value";
export default function ValueValidationParameters(property, valid, type, validation) {
    let message = Value.Parameters(property, valid, type);
    return `${message}, against "${validation}"`;
}
//# sourceMappingURL=value-validation-parameters.js.map