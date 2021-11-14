import RecordKeyCallbackParameters from "./record-key-callback-parameters";
export default function RecordKeyCallbackParameter(
// validator : ValidatorType,
// handler : (base:Record<InferBase<ValidatorType>, any>, validator:ValidatorType)=>Result,
// validation : (result:Result)=>ValidatableType,
// message : (result:Result)=>MessageType,
{ validator, handler, validation, message }) {
    return RecordKeyCallbackParameters(validator, (value, validator) => handler({ value, validator }), validation, message);
}
//# sourceMappingURL=record-key-callback-parameter.js.map