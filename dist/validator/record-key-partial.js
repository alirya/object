import ValidateRecordKeyPartial from "./validatable/record/record-key-partial";
import RecordKeyCallback from "./record-key-callback";
export default function RecordKeyPartial(
// validator : ValidatorType,
// validation : (partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>ValidatableType,
// message : (partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>MessageType,
{ validator, validation, message }) {
    return RecordKeyCallback({ validator, handler: ValidateRecordKeyPartial, validation, message });
}
//# sourceMappingURL=record-key-partial.js.map