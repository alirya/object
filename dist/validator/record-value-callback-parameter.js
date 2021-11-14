import RecordValueCallbackParameters from "./record-value-callback-parameters";
export default function RecordValueCallbackParameter(
// validator : ValidatorType,
// handler : (record:Partial<Record<PropertyKey, InferBase<ValidatorType>>>, validator : ValidatorType)=>Result,
// validation : (result:Result)=>ValidatableType,
// message : (result:Result)=>Message,
{ validator, handler, validation, message }) {
    return RecordValueCallbackParameters(validator, (value, validator) => handler({ value, validator }), validation, message);
}
//# sourceMappingURL=record-value-callback-parameter.js.map