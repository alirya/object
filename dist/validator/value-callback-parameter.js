import ValueCallbackParameters from "./value-callback-parameters";
export default function ValueCallbackParameter({ validators, map, validation, message, }) {
    return ValueCallbackParameters(validators, (value, validators) => map({ value, validators }), validation, message);
}
//# sourceMappingURL=value-callback-parameter.js.map