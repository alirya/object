import Validator from "@alirya/validator/validator";
import Validatable from "@alirya/validatable/validatable";
import ReturnInfer from "@alirya/validator/validatable/infer-static";
import ValidateRecordKeyPartial from "./validatable/record/record-key-partial-parameters";
import RecordKeyCallback from "./record-key-callback-parameters";
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

    return RecordKeyCallback(validator, ValidateRecordKeyPartial, validation, message);
}








