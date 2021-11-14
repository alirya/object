import RecordKeyPartialParameters from "./record-key-partial-parameters";
import RecordKeyPartialParameter from "./record-key-partial-parameter";
var RecordKeyPartial;
(function (RecordKeyPartial) {
    RecordKeyPartial.Parameters = RecordKeyPartialParameters;
    RecordKeyPartial.Parameter = RecordKeyPartialParameter;
})(RecordKeyPartial || (RecordKeyPartial = {}));
export default RecordKeyPartial;
//
//
// export function RecordKeyPartialParameter<
//     ValidatorType extends Validator = Validator,
//     ValidatableType extends Validatable = Validatable,
//     MessageType = unknown,
// >(
//     validator : ValidatorType,
//     validation : (partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>ValidatableType,
//     message : (partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>MessageType,
//     // {
//     //     validator,
//     //     validation,
//     //     message
//     // } : Argument<ValidatorType, ValidatableType, MessageType>
// ) : RecordKey<ValidatorType, Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType> {
//
//     return RecordKeyCallback.Parameter(validator, ValidateRecordKeyPartial.Parameter, validation, message);
// }
//
//
// export type RecordKeyPartialArgument<
//     ValidatorType extends Validator = Validator,
//     ValidatableType extends Validatable = Validatable,
//     MessageType = unknown,
// > =
//     ValidatorContainer<ValidatorType> &
//     {validation : (partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>ValidatableType} &
//     Message<(partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>MessageType>
// ;
//
// export function RecordKeyPartialObject<
//     ValidatorType extends Validator = Validator,
//     ValidatableType extends Validatable = Validatable,
//     MessageType = unknown,
// >(
//     // validator : ValidatorType,
//     // validation : (partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>ValidatableType,
//     // message : (partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>MessageType,
//     {
//         validator,
//         validation,
//         message
//     } : RecordKeyPartialArgument<ValidatorType, ValidatableType, MessageType>
// ) : RecordKey<ValidatorType, Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType> {
//
//     return RecordKeyPartialParameter(validator, validation, message);
// }
//
//
//
//
//
//# sourceMappingURL=record-key-partial.js.map