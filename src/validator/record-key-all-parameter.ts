import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "@dikac/t-validator/validatable/infer-static";
import RecordKey from "./record-key";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Message from "@dikac/t-message/message";
import RecordKeyAllParameters from "./record-key-all-parameters";

export type RecordKeyAllArgument<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> =
    ValidatorContainer<ValidatorType> &
    {validation : (record:Record<PropertyKey, ReturnInfer<ValidatorType>>)=>ValidatableType} &
    Message<(record:Record<PropertyKey, ReturnInfer<ValidatorType>>)=>MessageType>

export default function RecordKeyAllParameter<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    {
        validator,
        validation,
        message,
    } : RecordKeyAllArgument<ValidatorType, ValidatableType, MessageType>
) : RecordKey<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType> {

    return RecordKeyAllParameters(validator, validation, message);
}














