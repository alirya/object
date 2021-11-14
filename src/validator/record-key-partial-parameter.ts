import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "@dikac/t-validator/validatable/infer-static";
import RecordKey from "./record-key";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Message from "@dikac/t-message/message";
import RecordKeyPartialParameters from "./record-key-partial-parameters";

//
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

export type RecordKeyPartialArgument<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> =
    ValidatorContainer<ValidatorType> &
    {validation : (partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>ValidatableType} &
    Message<(partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>MessageType>
;

export default function RecordKeyPartialParameter<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    // validator : ValidatorType,
    // validation : (partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>ValidatableType,
    // message : (partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>MessageType,
    {
        validator,
        validation,
        message
    } : RecordKeyPartialArgument<ValidatorType, ValidatableType, MessageType>
) : RecordKey<ValidatorType, Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType> {

    return RecordKeyPartialParameters(validator, validation, message);
}












