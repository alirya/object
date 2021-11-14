import ValidateRecordKey from "./validatable/record/record-key";
import RecordKeyCallback from "./record-key-callback";
export default function RecordKeyAllParameters(validator, validation, message) {
    return RecordKeyCallback.Parameters(validator, ValidateRecordKey.Parameters, validation, message);
}
//# sourceMappingURL=record-key-all-parameters.js.map