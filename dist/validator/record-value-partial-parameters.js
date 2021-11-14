import ValidateMap from "./validatable/record/record-value-partial";
import RecordValueCallback from "./record-value-callback";
export default function RecordValuePartialParameters(validator, validation, message) {
    return RecordValueCallback.Parameters(validator, ValidateMap.Parameters, validation, message);
}
//# sourceMappingURL=record-value-partial-parameters.js.map