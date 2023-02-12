import Validator from '@alirya/validator/validator.js';
import Validatable from '@alirya/validatable/validatable.js';
import ReturnInfer from '@alirya/validator/validatable/infer-static.js';
import ValidateMap from './validatable/record/record-value.js';
import RecordValueCallback, {RecordValueCallbackReturn as RecordValueAllReturn} from './record-value-callback.js';
import ValidatorContainer from '@alirya/validator/validator/validator.js';
import Message from '@alirya/message/message.js';
import Instance from '@alirya/validator/validatable/validatable.js';

export function RecordValueAllParameters<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validator : ValidatorType,
    validation : (record : Record<PropertyKey, ReturnInfer<ValidatorType>>) => ValidatableType,
    message : (record : Record<PropertyKey, ReturnInfer<ValidatorType>>) => MessageType,
) : RecordValueAllReturn<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType> {

    return RecordValueCallback.Parameters(
        validator,
        ValidateMap.Parameters,
        validation,
        message
    ) as RecordValueAllReturn<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType> ;
}



export type RecordValueAllArgument<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> =
    ValidatorContainer<ValidatorType> &
    Message<(record : Record<PropertyKey, ReturnInfer<ValidatorType>>) => MessageType> &
    {validation: (record : Record<PropertyKey, ReturnInfer<ValidatorType>>) => ValidatableType};

export function RecordValueAllParameter<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    {
        validator,
        validation,
        message,
    } : RecordValueAllArgument<ValidatorType, ValidatableType, MessageType>
) : RecordValueAllReturn<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType> {

    return RecordValueAllParameters(validator, validation, message);
}

export {RecordValueAllReturn};

namespace RecordValueAll {
    export const Parameters = RecordValueAllParameters;
    export const Parameter = RecordValueAllParameter;
    export type Argument<
        ValidatorType extends Validator = Validator,
        ValidatableType extends Validatable = Validatable,
        MessageType = unknown,
    > = RecordValueAllArgument<
        ValidatorType,
        ValidatableType,
        MessageType
    >;

    export type Return<
        ValidatorTemplate extends Validator,
        Result extends Partial<Record<PropertyKey, Instance>>,
        ValidatableTemplate extends Validatable ,
        MessageTemplate,
    > = RecordValueAllReturn<
        ValidatorTemplate,
        Result,
        ValidatableTemplate,
        MessageTemplate
    >;
}
export default RecordValueAll;
