import RecordValuePartialParameters from "./record-value-partial-parameters";
export default function RecordValuePartialParameter(
// validator : ValidatorType,
// validation : (record : Record<PropertyKey, ReturnInfer<ValidatorType>>)=>ValidatableType,
// message : (record : Record<PropertyKey, ReturnInfer<ValidatorType>>)=>MessageType,
{ validator, validation, message, }) {
    return RecordValuePartialParameters(validator, validation, message);
}
//# sourceMappingURL=record-value-partial-parameter.js.map