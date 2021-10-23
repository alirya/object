import ValidateMap from "./validatable/record/record-value-partial";
import RecordValueCallback from "./record-value-callback";
export default function RecordValuePartial(validator, validation, message) {
    return RecordValueCallback({
        validator,
        handler: ({ value, validator }) => ValidateMap({ value, validator }),
        validation,
        message
    });
}
//# sourceMappingURL=record-value-partial.js.map