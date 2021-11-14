import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "@dikac/t-validator/validatable/infer-static";
import RecordValue from "./record-value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Message from "@dikac/t-message/message";
import RecordValueAllParameters from "./record-value-all-parameters";

export type RecordValueAllArgument<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> =
    ValidatorContainer<ValidatorType> &
    Message<(record : Record<PropertyKey, ReturnInfer<ValidatorType>>) => MessageType> &
    {validation: (record : Record<PropertyKey, ReturnInfer<ValidatorType>>) => ValidatableType}

export default function RecordValueAllParameter<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    // validator : ValidatorType,
    // validation : (record : Record<PropertyKey, ReturnInfer<ValidatorType>>) => ValidatableType,
    // message : (record : Record<PropertyKey, ReturnInfer<ValidatorType>>) => MessageType,
    {
        validator,
        validation,
        message,
    } : RecordValueAllArgument<ValidatorType, ValidatableType, MessageType>
) : RecordValue<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType> {

    return RecordValueAllParameters(validator, validation, message);
}
