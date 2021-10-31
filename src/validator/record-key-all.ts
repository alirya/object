import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "@dikac/t-validator/validatable/infer-unambiguous";
import ValidateRecordKey from "./validatable/record/record-key";
import RecordKey from "./record-key";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Message from "@dikac/t-message/message";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import RecordKeyCallback from "./record-key-callback";

export default RecordKeyAll;
namespace RecordKeyAll {

    export const Parameter = RecordKeyAllParameter;
    export const Object = RecordKeyAllObject;
    export type Argument<
        ValidatorType extends Validator = Validator,
        ValidatableType extends Validatable = Validatable,
        MessageType = unknown,
    > = RecordKeyAllArgument<
        ValidatorType,
        ValidatableType,
        MessageType
    >;
}

export function RecordKeyAllParameter<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validator : ValidatorType,
    validation : (record:Record<PropertyKey, ReturnInfer<ValidatorType>>)=>ValidatableType,
    message : (record:Record<PropertyKey, ReturnInfer<ValidatorType>>)=>MessageType,
) : RecordKey<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType> {

    return RecordKeyCallback.Parameter(
        validator,
        ValidateRecordKey.Parameter,
        validation,
        message
    ) as RecordKey<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType>;
}

export type RecordKeyAllArgument<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> =
    ValidatorContainer<ValidatorType> &
    {validation : (record:Record<PropertyKey, ReturnInfer<ValidatorType>>)=>ValidatableType} &
    Message<(record:Record<PropertyKey, ReturnInfer<ValidatorType>>)=>MessageType>

export function RecordKeyAllObject<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    // validator : ValidatorType,
    // validation : (record:Record<PropertyKey, ReturnInfer<ValidatorType>>)=>ValidatableType,
    // message : (record:Record<PropertyKey, ReturnInfer<ValidatorType>>)=>MessageType,
    {
        validator,
        validation,
        message,
    } : RecordKeyAllArgument<ValidatorType, ValidatableType, MessageType>
) : RecordKey<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType> {

    return RecordKeyAllParameter(validator, validation, message);
}














