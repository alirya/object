import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "@dikac/t-validator/validatable/infer-static";
import ValidateMap from "./validatable/record/record-value";
import RecordValue from "./record-value";
import RecordValueCallback from "./record-value-callback";

export default function RecordValueAllParameters<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validator : ValidatorType,
    validation : (record : Record<PropertyKey, ReturnInfer<ValidatorType>>) => ValidatableType,
    message : (record : Record<PropertyKey, ReturnInfer<ValidatorType>>) => MessageType,
) : RecordValue<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType> {

    return RecordValueCallback.Parameters(
        validator,
        ValidateMap.Parameters,
        validation,
        message
    ) as RecordValue<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType> ;
}

