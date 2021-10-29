import ValidateMap from "./validatable/record/record-value-partial";
import RecordValueCallback from "./record-value-callback";
export default RecordValuePartial;
var RecordValuePartial;
(function (RecordValuePartial) {
    RecordValuePartial.Parameter = RecordValuePartialParameter;
    RecordValuePartial.Object = RecordValuePartialObject;
})(RecordValuePartial || (RecordValuePartial = {}));
export function RecordValuePartialParameter(validator, validation, message) {
    return RecordValueCallback.Parameter(validator, ValidateMap.Parameter, validation, message);
}
export function RecordValuePartialObject(
// validator : ValidatorType,
// validation : (record : Record<PropertyKey, ReturnInfer<ValidatorType>>)=>ValidatableType,
// message : (record : Record<PropertyKey, ReturnInfer<ValidatorType>>)=>MessageType,
{ validator, validation, message, }) {
    return RecordValuePartialParameter(validator, validation, message);
}
//# sourceMappingURL=record-value-partial.js.map