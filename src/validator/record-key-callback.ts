import Validator from '@axiona/validator/validator.js';
import Validatable from '@axiona/validatable/validatable.js';
import ValidatableRecordCallback, {RecordValueCallbackContext} from '../validatable/record-value-callback.js';
import ValidatorValidatable from '@axiona/validator/validatable/validatable.js';
import InferBase from '@axiona/validator/subject/allow.js';
import ValidatorContainer from '@axiona/validator/validator/validator.js';
import Message from '@axiona/message/message.js';
import Value from '@axiona/value/value.js';
import SimpleValidator from '@axiona/validator/simple.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import InferExpectation from '@axiona/validator/subject/expectation.js';
import InferSubject from '@axiona/validator/subject/subject.js';
// import ValidatableRecord from '../validatable/record-value.js';
import {ObjectParameters} from './object.js';
import {ValueCallbackContext} from '../validatable/value-callback.js';

export function RecordKeyCallbackParameters<
    ValidatorType extends Validator<PropertyKey> = Validator<PropertyKey>,
    Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validator : ValidatorType,
    handler : (value:Record<InferBase<ValidatorType>, any>, validator:ValidatorType)=>Result,
    validation : (result:Result)=>ValidatableType,
    message : (result:Result)=>MessageType,
) : RecordKeyCallbackReturn<ValidatorType, Result, ValidatableType, MessageType> {

    const objectValidator = ObjectParameters();

    return function (value) {

        const validatable =  objectValidator(value);

        if(!validatable.valid) {

            return validatable;
        }

        return new ValidatableRecordCallback.Parameters(value, validator, handler, validation, message);

    } as RecordKeyCallbackReturn<ValidatorType, Result, ValidatableType, MessageType>;
}

export type RecordKeyCallbackArgument<
    ValidatorType extends Validator<PropertyKey> = Validator<PropertyKey>,
    Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> =
    ValidatorContainer<ValidatorType> &
    Message<(result:Result)=>MessageType> &
    { handler: (argument : Value<Record<InferBase<ValidatorType>, any>> & ValidatorContainer<ValidatorType>) => Result } &
    { validation: (result: Result) => ValidatableType }
;

export function RecordKeyCallbackParameter<
    ValidatorType extends Validator<PropertyKey> = Validator<PropertyKey>,
    Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    {   validator,
        handler,
        validation,
        message
    } : RecordKeyCallbackArgument<ValidatorType, Result, ValidatableType, MessageType>
) : RecordKeyCallbackReturn<ValidatorType, Result, ValidatableType, MessageType> {

    return RecordKeyCallbackParameters(
        validator,
        (value, validator) => handler({value, validator}),
        validation,
        message
    );
}



export type RecordKeyCallbackReturn<
    ValidatorTemplate extends Validator<PropertyKey>,
    Result extends Partial<Record<PropertyKey, Instance>>,
    ValidatableTemplate extends Validatable ,
    MessageTemplate,
    > =
    SimpleValidator<
        Record<InferBase<ValidatorTemplate>, any>,
        Record<InferExpectation<ValidatorTemplate>, any>,
        MessageTemplate,
        RecordValueCallbackContext<Record<PropertyKey, InferSubject<ValidatorTemplate>>, ValidatorTemplate, Result, ValidatableTemplate>
        // ValidatableRecord<MessageTemplate, Record<PropertyKey, InferSubject<ValidatorTemplate>>, ValidatorTemplate, Result, ValidatableTemplate>
        >;



namespace RecordKeyCallback {
    export const Parameters = RecordKeyCallbackParameters;
    export const Parameter = RecordKeyCallbackParameter;
    export type Return<
        ValidatorTemplate extends Validator<PropertyKey>,
        Result extends Partial<Record<PropertyKey, Instance>>,
        ValidatableTemplate extends Validatable,
        MessageTemplate,
    > = RecordKeyCallbackReturn<
        ValidatorTemplate,
        Result,
        ValidatableTemplate,
        MessageTemplate
    >;

    export type Argument<
        ValidatorType extends Validator<PropertyKey> = Validator<PropertyKey>,
        Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
        ValidatableType extends Validatable = Validatable,
        MessageType = unknown,
    > = RecordKeyCallbackArgument<
        ValidatorType,
        Result,
        ValidatableType,
        MessageType
    >;
}
export default RecordKeyCallback;
