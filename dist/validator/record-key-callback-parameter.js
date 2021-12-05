import RecordKeyCallbackParameters from "./record-key-callback-parameters";
export default function RecordKeyCallbackParameter({ validator, handler, validation, message }) {
    return RecordKeyCallbackParameters(validator, (value, validator) => handler({ value, validator }), validation, message);
}
//# sourceMappingURL=record-key-callback-parameter.js.map