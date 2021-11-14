import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "@dikac/t-validator/validatable/infer-static";
import ValidateRecordKey from "./validatable/record/record-key";
import RecordKey from "./record-key";
import RecordKeyCallback from "./record-key-callback";

export default function RecordKeyAllParameters<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validator : ValidatorType,
    validation : (record:Record<PropertyKey, ReturnInfer<ValidatorType>>)=>ValidatableType,
    message : (record:Record<PropertyKey, ReturnInfer<ValidatorType>>)=>MessageType,
) : RecordKey<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType> {

    return RecordKeyCallback.Parameters(
        validator,
        ValidateRecordKey.Parameters,
        validation,
        message
    ) as RecordKey<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType>;
}








