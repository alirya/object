import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "@dikac/t-validator/validatable/infer-unambiguous";
import ValidateRecordKeyPartial from "./validatable/record/record-key-partial";
import RecordKeyCallback from "./record-key-callback";
import RecordKey from "./record-key";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Message from "@dikac/t-message/message";
import Instance from "@dikac/t-validator/validatable/validatable";


export default RecordKeyPartial;
namespace RecordKeyPartial {

    export const Parameter = RecordKeyPartialParameter;
    export const Object = RecordKeyPartialObject;
    export type Argument<
        ValidatorType extends Validator = Validator,
        ValidatableType extends Validatable = Validatable,
        MessageType = unknown,
    > = RecordKeyPartialArgument<
        ValidatorType,
        ValidatableType,
        MessageType
    >;
}


export function RecordKeyPartialParameter<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validator : ValidatorType,
    validation : (partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>ValidatableType,
    message : (partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>MessageType,
    // {
    //     validator,
    //     validation,
    //     message
    // } : Argument<ValidatorType, ValidatableType, MessageType>
) : RecordKey<ValidatorType, Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType> {

    return RecordKeyCallback.Parameter(validator, ValidateRecordKeyPartial.Parameter, validation, message);
}


export type RecordKeyPartialArgument<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> =
    ValidatorContainer<ValidatorType> &
    {validation : (partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>ValidatableType} &
    Message<(partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>MessageType>
;

export function RecordKeyPartialObject<
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

    return RecordKeyPartialParameter(validator, validation, message);
}












