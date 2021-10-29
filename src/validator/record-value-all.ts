import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "@dikac/t-validator/validatable/infer-unambiguous";
import ValidateMap from "./validatable/record/record-value";
import RecordValue from "./record-value";
import Instance from "@dikac/t-validator/validatable/validatable";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import MessageType from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import InferBase from "@dikac/t-validator/base/infer";
import Message from "@dikac/t-message/message";
import RecordValueCallback from "./record-value-callback";


export default RecordValueAll;
namespace RecordValueAll {

    export const Parameter = RecordValueAllParameter;
    export const Object = RecordValueAllObject;
    export type Argument<
        ValidatorType extends Validator = Validator,
        ValidatableType extends Validatable = Validatable,
        MessageType = unknown,
    > = RecordValueAllArgument<
        ValidatorType,
        ValidatableType,
        MessageType
    >;
}


export function RecordValueAllParameter<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validator : ValidatorType,
    validation : (record : Record<PropertyKey, ReturnInfer<ValidatorType>>) => ValidatableType,
    message : (record : Record<PropertyKey, ReturnInfer<ValidatorType>>) => MessageType,
) : RecordValue<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType> {

    return RecordValueCallback.Parameter(
        validator,
        ValidateMap.Parameter,
        validation,
        message
    ) as RecordValue<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType> ;
}

export type RecordValueAllArgument<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> =
    ValidatorContainer<ValidatorType> &
    Message<(record : Record<PropertyKey, ReturnInfer<ValidatorType>>) => MessageType> &
    {validation: (record : Record<PropertyKey, ReturnInfer<ValidatorType>>) => ValidatableType}

export function RecordValueAllObject<
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

    return RecordValueAllParameter(validator, validation, message);
}
