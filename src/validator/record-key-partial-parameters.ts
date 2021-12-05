import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "@dikac/t-validator/validatable/infer-static";
import ValidateRecordKeyPartial from "./validatable/record/record-key-partial";
import RecordKeyCallback from "./record-key-callback";
import RecordKey from "./record-key";

export default function RecordKeyPartialParameters<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validator : ValidatorType,
    validation : (partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>ValidatableType,
    message : (partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>MessageType,
) : RecordKey<ValidatorType, Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType> {

    return RecordKeyCallback.Parameters(validator, ValidateRecordKeyPartial.Parameters, validation, message);
}








