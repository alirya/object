import RecordValueCallbackParameters from "./record-value-callback-parameters";
;
export default class RecordValueCallbackParameter extends RecordValueCallbackParameters {
    constructor({ value, validator, map, validation, message }) {
        super(value, validator, (value, validator) => map({ value, validator }), validation, message);
    }
}
//# sourceMappingURL=record-value-callback-parameter.js.map