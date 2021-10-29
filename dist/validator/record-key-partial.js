import ValidateRecordKeyPartial from "./validatable/record/record-key-partial";
import RecordKeyCallback from "./record-key-callback";
export default RecordKeyPartial;
var RecordKeyPartial;
(function (RecordKeyPartial) {
    RecordKeyPartial.Parameter = RecordKeyPartialParameter;
    RecordKeyPartial.Object = RecordKeyPartialObject;
})(RecordKeyPartial || (RecordKeyPartial = {}));
export function RecordKeyPartialParameter(validator, validation, message) {
    return RecordKeyCallback.Parameter(validator, ValidateRecordKeyPartial.Parameter, validation, message);
}
export function RecordKeyPartialObject(
// validator : ValidatorType,
// validation : (partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>ValidatableType,
// message : (partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>MessageType,
{ validator, validation, message }) {
    return RecordKeyPartialParameter(validator, validation, message);
}
//# sourceMappingURL=record-key-partial.js.map