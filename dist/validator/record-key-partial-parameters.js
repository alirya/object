import ValidateRecordKeyPartial from "./validatable/record/record-key-partial";
import RecordKeyCallback from "./record-key-callback";
// export default RecordKeyPartial;
// namespace RecordKeyPartial {
//
//     export const Parameter = RecordKeyPartialParameter;
//     export const Object = RecordKeyPartialObject;
//     export type Argument<
//         ValidatorType extends Validator = Validator,
//         ValidatableType extends Validatable = Validatable,
//         MessageType = unknown,
//     > = RecordKeyPartialArgument<
//         ValidatorType,
//         ValidatableType,
//         MessageType
//     >;
// }
export default function RecordKeyPartialParameters(validator, validation, message) {
    return RecordKeyCallback.Parameters(validator, ValidateRecordKeyPartial.Parameters, validation, message);
}
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
//# sourceMappingURL=record-key-partial-parameters.js.map