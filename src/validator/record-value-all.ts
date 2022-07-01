import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import ReturnInfer from '@alirya/validator/validatable/infer-static';
import ValidateMap from './validatable/record/record-value';
import RecordValueCallback, {RecordValueCallbackReturn as RecordValueAllReturn} from './record-value-callback';
import ValidatorContainer from '@alirya/validator/validator/validator';
import Message from '@alirya/message/message';
import Instance from '@alirya/validator/validatable/validatable';

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
