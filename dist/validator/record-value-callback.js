import ValidatableRecordCallback from "../validatable/record-value-callback";
export default function RecordValueCallback(
// validator : ValidatorType,
// handler : (record:Partial<Record<PropertyKey, InferBase<ValidatorType>>>, validator : ValidatorType)=>Result,
// validation : (result:Result)=>ValidatableType,
// message : (result:Result)=>Message,
{ validator, handler, validation, message }) {
    return function (value) {
        return new ValidatableRecordCallback({ value, validator, map: handler, validation, message });
    };
}
//# sourceMappingURL=record-value-callback.js.map