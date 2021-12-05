import ValidateRecordKeyPartial from "./validatable/record/record-key-partial";
import RecordKeyCallback from "./record-key-callback";
export default function RecordKeyPartialParameters(validator, validation, message) {
    return RecordKeyCallback.Parameters(validator, ValidateRecordKeyPartial.Parameters, validation, message);
}
//# sourceMappingURL=record-key-partial-parameters.js.map