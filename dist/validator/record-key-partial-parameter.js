import RecordKeyPartialParameters from "./record-key-partial-parameters";
export default function RecordKeyPartialParameter(
// validator : ValidatorType,
// validation : (partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>ValidatableType,
// message : (partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>MessageType,
{ validator, validation, message }) {
    return RecordKeyPartialParameters(validator, validation, message);
}
//# sourceMappingURL=record-key-partial-parameter.js.map