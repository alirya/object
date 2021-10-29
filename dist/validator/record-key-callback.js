import ValidatableRecordCallback from "../validatable/record-value-callback";
export default RecordKeyCallback;
var RecordKeyCallback;
(function (RecordKeyCallback) {
    RecordKeyCallback.Parameter = RecordKeyCallbackParameter;
    RecordKeyCallback.Object = RecordKeyCallbackObject;
})(RecordKeyCallback || (RecordKeyCallback = {}));
//
// export default class RecordKeyCallback<
//     ValidatorType extends Validator<PropertyKey> = Validator<PropertyKey>,
//     Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
//     ValidatableType extends Validatable = Validatable,
//     MessageType = unknown,
// > implements RecordKey< ValidatorType, Result, ValidatableType, MessageType> {
//
//     constructor(
//         public validator : ValidatorType,
//         public handler : (base:Record<InferBase<ValidatorType>, any>, validator:ValidatorType)=>Result,
//         public validation : (result:Result)=>ValidatableType,
//         public message : (result:Result)=>MessageType
//     ) {
//     }
//
//     validate<Argument extends Record<InferType<ValidatorType>, any>>(
//         argument: Argument
//     ) : Replace<ValidatableRecord<MessageType, Argument, ValidatorType, Result, ValidatableType>, true>
//
//     validate<Argument extends Record<InferBase<ValidatorType>, any>>(
//         argument: Argument
//     ) : Return<Record<InferBase<ValidatorType>, any>, Argument, Record<InferBase<ValidatorType>, any>, ValidatableRecord<MessageType, Record<InferBase<ValidatorType>, any>, ValidatorType, Result, ValidatableType>>
//
//     validate<Argument extends Record<InferBase<ValidatorType>, any>>(
//         argument: Argument
//     ) {
//
//         return new ValidatableRecordCallback(argument, this.validator, this.handler, this.validation, this.message) as
//             Return<Record<InferBase<ValidatorType>, any>, Argument, Record<InferBase<ValidatorType>, any>, ValidatableRecord<MessageType, Record<InferBase<ValidatorType>, any>, ValidatorType, Result, ValidatableType>>;
//     }
// }
export function RecordKeyCallbackParameter(validator, handler, validation, message) {
    return function (value) {
        return new ValidatableRecordCallback({ value, validator, map: handler, validation, message });
    };
}
export function RecordKeyCallbackObject(
// validator : ValidatorType,
// handler : (base:Record<InferBase<ValidatorType>, any>, validator:ValidatorType)=>Result,
// validation : (result:Result)=>ValidatableType,
// message : (result:Result)=>MessageType,
{ validator, handler, validation, message }) {
    return RecordKeyCallbackParameter(validator, (value, validator) => handler({ value, validator }), validation, message);
}
//# sourceMappingURL=record-key-callback.js.map