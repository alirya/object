import Validator from '@alirya/validator/validator.js';
import Validatable from '@alirya/validatable/validatable.js';
import ReturnInfer from '@alirya/validator/validatable/infer-static.js';
import ValidateRecordKey from './validatable/record/record-key.js';
import RecordKeyCallback, {RecordKeyCallbackReturn as RecordKeyAllReturn} from './record-key-callback.js';
import ValidatorContainer from '@alirya/validator/validator/validator.js';
import Message from '@alirya/message/message.js';
import Instance from '@alirya/validator/validatable/validatable.js';


export function RecordKeyAllParameters<
    ValidatorType extends Validator<PropertyKey, PropertyKey> = Validator<PropertyKey, PropertyKey>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validator : ValidatorType,
    validation : (record:Record<PropertyKey, ReturnInfer<ValidatorType>>)=>ValidatableType,
    message : (record:Record<PropertyKey, ReturnInfer<ValidatorType>>)=>MessageType,
) : RecordKeyAllReturn<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType> {

    return RecordKeyCallback.Parameters(
        validator,
        ValidateRecordKey.Parameters,
        validation,
        message
    ) as RecordKeyAllReturn<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType>;
}

export type RecordKeyAllArgument<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> =
    ValidatorContainer<ValidatorType> &
    {validation : (record:Record<PropertyKey, ReturnInfer<ValidatorType>>)=>ValidatableType} &
    Message<(record:Record<PropertyKey, ReturnInfer<ValidatorType>>)=>MessageType>;

export function RecordKeyAllParameter<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    {
        validator,
        validation,
        message,
    } : RecordKeyAllArgument<ValidatorType, ValidatableType, MessageType>
) : RecordKeyAllReturn<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType> {

    return RecordKeyAllParameters(validator, validation, message);
}



namespace RecordKeyAll {
    export const Parameters = RecordKeyAllParameters;
    export const Parameter = RecordKeyAllParameter;
    export type Argument<
        ValidatorType extends Validator = Validator,
        ValidatableType extends Validatable = Validatable,
        MessageType = unknown,
    > = RecordKeyAllArgument<
        ValidatorType,
        ValidatableType,
        MessageType
    >;

    export type Return<
        ValidatorTemplate extends Validator<PropertyKey>,
        Result extends Partial<Record<PropertyKey, Instance>>,
        ValidatableTemplate extends Validatable ,
        MessageTemplate,
    > = RecordKeyAllReturn<
        ValidatorTemplate,
        Result,
        ValidatableTemplate,
        MessageTemplate
    >;
}
export default RecordKeyAll;
