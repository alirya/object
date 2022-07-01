import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import ReturnInfer from '@alirya/validator/validatable/infer-static';
import ValidateRecordKeyPartial from './validatable/record/record-key-partial';
import RecordKeyCallback, {
    RecordKeyCallbackReturn as RecordKeyPartialReturn
} from './record-key-callback';
import ValidatorContainer from '@alirya/validator/validator/validator';
import Message from '@alirya/message/message';
import Instance from '@alirya/validator/validatable/validatable';

export function RecordKeyPartialParameters<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validator : ValidatorType,
    validation : (partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>ValidatableType,
    message : (partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>MessageType,
) : RecordKeyPartialReturn<ValidatorType, Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType> {

    return RecordKeyCallback.Parameters(validator, ValidateRecordKeyPartial.Parameters, validation, message);
}


export type RecordKeyPartialArgument<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> =
    ValidatorContainer<ValidatorType> &
    {validation : (partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>ValidatableType} &
    Message<(partial:Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>MessageType>
;

export function RecordKeyPartialParameter<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    {
        validator,
        validation,
        message
    } : RecordKeyPartialArgument<ValidatorType, ValidatableType, MessageType>
) : RecordKeyPartialReturn<ValidatorType, Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType> {

    return RecordKeyPartialParameters(validator, validation, message);
}

namespace RecordKeyPartial {
    export const Parameters = RecordKeyPartialParameters;
    export const Parameter = RecordKeyPartialParameter;
    export type Argument<
        ValidatorType extends Validator = Validator,
        ValidatableType extends Validatable = Validatable,
        MessageType = unknown,
    > = RecordKeyPartialArgument<
        ValidatorType,
        ValidatableType,
        MessageType
    >;

    export type Return<
        ValidatorTemplate extends Validator<PropertyKey>,
        Result extends Partial<Record<PropertyKey, Instance>>,
        ValidatableTemplate extends Validatable ,
        MessageTemplate,
    > = RecordKeyPartialReturn<
        ValidatorTemplate,
        Result,
        ValidatableTemplate,
        MessageTemplate
    >;
}
export default RecordKeyPartial;
