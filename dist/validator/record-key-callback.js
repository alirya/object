import ValidatableRecordCallback from "../validatable/record-value-callback";
export default function RecordKeyCallback(
// validator : ValidatorType,
// handler : (base:Record<InferBase<ValidatorType>, any>, validator:ValidatorType)=>Result,
// validation : (result:Result)=>ValidatableType,
// message : (result:Result)=>MessageType,
{ validator, handler, validation, message }) {
    return function (value) {
        return new ValidatableRecordCallback({ value, validator, map: handler, validation, message });
    };
}
//# sourceMappingURL=record-key-callback.js.map