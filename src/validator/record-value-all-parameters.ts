import Validator from "@alirya/validator/validator";
import Validatable from "@alirya/validatable/validatable";
import ReturnInfer from "@alirya/validator/validatable/infer-static";
import ValidateMap from "./validatable/record/record-value-parameters";
import RecordValue from "./record-value";
import RecordValueCallback from "./record-value-callback-parameters";

export default function RecordValueAllParameters<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validator : ValidatorType,
    validation : (record : Record<PropertyKey, ReturnInfer<ValidatorType>>) => ValidatableType,
    message : (record : Record<PropertyKey, ReturnInfer<ValidatorType>>) => MessageType,
) : RecordValue<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType> {

    return RecordValueCallback(
        validator,
        ValidateMap,
        validation,
        message
    ) as RecordValue<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType> ;
}

