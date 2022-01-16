import Validator from "@alirya/validator/validator";
import Validatable from "@alirya/validatable/validatable";
import ReturnInfer from "@alirya/validator/validatable/infer-static";
import RecordKey from "./record-key";
import ValidatorContainer from "@alirya/validator/validator/validator";
import Message from "@alirya/message/message";
import RecordKeyPartialParameters from "./record-key-partial-parameters";

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
    {
        validator,
        validation,
        message
    } : RecordKeyPartialArgument<ValidatorType, ValidatableType, MessageType>
) : RecordKey<ValidatorType, Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType> {

    return RecordKeyPartialParameters(validator, validation, message);
}












