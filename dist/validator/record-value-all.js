import ValidateMap from "./validatable/record/record-value";
import RecordValueCallback from "./record-value-callback";
export default RecordValueAll;
var RecordValueAll;
(function (RecordValueAll) {
    RecordValueAll.Parameter = RecordValueAllParameter;
    RecordValueAll.Object = RecordValueAllObject;
})(RecordValueAll || (RecordValueAll = {}));
export function RecordValueAllParameter(validator, validation, message) {
    return RecordValueCallback.Parameter(validator, ValidateMap.Parameter, validation, message);
}
export function RecordValueAllObject(
// validator : ValidatorType,
// validation : (record : Record<PropertyKey, ReturnInfer<ValidatorType>>) => ValidatableType,
// message : (record : Record<PropertyKey, ReturnInfer<ValidatorType>>) => MessageType,
{ validator, validation, message, }) {
    return RecordValueAllParameter(validator, validation, message);
}
//# sourceMappingURL=record-value-all.js.map