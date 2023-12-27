import Validator from '@axiona/validator/validator.js';
import Validatable from '@axiona/validatable/validatable.js';
import ReturnInfer from '@axiona/validator/validatable/infer-static.js';
import ValidateMap from './validatable/record/record-value-partial.js';
import RecordValueCallback, {
    RecordValueCallbackReturn as RecordValuePartialReturn
} from './record-value-callback.js';
import ValidatorContainer from '@axiona/validator/validator/validator.js';
import Message from '@axiona/message/message.js';
import Instance from '@axiona/validator/validatable/validatable.js';


export function RecordValuePartialParameters<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> (
    validator : ValidatorType,
    validation : (record : Record<PropertyKey, ReturnInfer<ValidatorType>>)=>ValidatableType,
    message : (record : Record<PropertyKey, ReturnInfer<ValidatorType>>)=>MessageType,
) : RecordValuePartialReturn<ValidatorType, Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType>  {

    return RecordValueCallback.Parameters(
        validator,
        ValidateMap.Parameters,
        validation,
        message
    ) as RecordValuePartialReturn<ValidatorType, Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType>;
}


export type RecordValuePartialArgument<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> =
    ValidatorContainer<ValidatorType> &
    Message<(record : Record<PropertyKey, ReturnInfer<ValidatorType>>)=>MessageType> &
    {validation: (record : Record<PropertyKey, ReturnInfer<ValidatorType>>)=>ValidatableType}
    ;

export function RecordValuePartialParameter<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> (
    {
        validator,
        validation,
        message,
    } : RecordValuePartialArgument<ValidatorType, ValidatableType, MessageType>
) : RecordValuePartialReturn<ValidatorType, Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType>  {

    return RecordValuePartialParameters(validator, validation, message);
}

export {RecordValuePartialReturn};

namespace RecordValuePartial {
    export const Parameters = RecordValuePartialParameters;
    export const Parameter = RecordValuePartialParameter;
    export type Argument<
        ValidatorType extends Validator = Validator,
        ValidatableType extends Validatable = Validatable,
        MessageType = unknown,
    > = RecordValuePartialArgument<
        ValidatorType,
        ValidatableType,
        MessageType
    >;

    export type Return<
        ValidatorTemplate extends Validator,
        Result extends Partial<Record<PropertyKey, Instance>>,
        ValidatableTemplate extends Validatable ,
        MessageTemplate,
    > = RecordValuePartialReturn<
        ValidatorTemplate,
        Result,
        ValidatableTemplate,
        MessageTemplate
    >;
}
export default RecordValuePartial;
