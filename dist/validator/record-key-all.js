import ValidateRecordKey from "./validatable/record/record-key";
import RecordKeyCallback from "./record-key-callback";
export default RecordKeyAll;
var RecordKeyAll;
(function (RecordKeyAll) {
    RecordKeyAll.Parameter = RecordKeyAllParameter;
    RecordKeyAll.Object = RecordKeyAllObject;
})(RecordKeyAll || (RecordKeyAll = {}));
export function RecordKeyAllParameter(validator, validation, message) {
    return RecordKeyCallback.Parameter(validator, ValidateRecordKey.Parameter, validation, message);
}
export function RecordKeyAllObject(
// validator : ValidatorType,
// validation : (record:Record<PropertyKey, ReturnInfer<ValidatorType>>)=>ValidatableType,
// message : (record:Record<PropertyKey, ReturnInfer<ValidatorType>>)=>MessageType,
{ validator, validation, message, }) {
    return RecordKeyAllParameter(validator, validation, message);
}
//# sourceMappingURL=record-key-all.js.map