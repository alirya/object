import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "@dikac/t-validator/validatable/infer-unambiguous";
import ValidateRecordKeyPartial from "./validatable/record/record-key-partial";
import RecordKeyCallback from "./record-key-callback";
import RecordKey from "./record-key";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Message from "@dikac/t-message/message";

export type Argument<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> =
    ValidatorContainer<ValidatorType> &
    {validation : (partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>ValidatableType} &
    Message<(partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>MessageType>
;

export default function RecordKeyPartial<
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
    } : Argument<ValidatorType, ValidatableType, MessageType>
) : RecordKey<ValidatorType, Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType> {

    return RecordKeyCallback({validator, handler:ValidateRecordKeyPartial, validation, message});
}












