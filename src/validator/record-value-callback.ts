import Validator from '@axiona/validator/validator.js';
import InferBase from '@axiona/validator/subject/allow.js';
import Validatable from '@axiona/validatable/validatable.js';
import ValidatableRecordCallback from '../validatable/record-value-callback.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import ValidatorContainer from '@axiona/validator/validator/validator.js';
import MessageType from '@axiona/message/message.js';
import Value from '@axiona/value/value.js';
import SimpleValidator from '@axiona/validator/simple.js';
import InferType from '@axiona/validator/subject/expectation.js';
// import ValidatableRecord from '../validatable/record-value.js';
import {ObjectParameters} from './object.js';
import {RecordValueCallbackContext} from '../validatable/record-value-callback.js';

export function RecordValueCallbackParameters<
    ValidatorType extends Validator = Validator,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    Message = unknown,
>(
    validator : ValidatorType,
    handler : (value:Partial<Record<PropertyKey, InferBase<ValidatorType>>>, validator : ValidatorType)=>Result,
    validation : (result:Result)=>ValidatableType,
    message : (result:Result)=>Message,
) : RecordValueCallbackReturn<ValidatorType, Result, ValidatableType, Message> {

    const objectValidator = ObjectParameters();

    return function (value) {

        const validatable =  objectValidator(value);

        if(!validatable.valid) {

            return validatable;
        }

        return new ValidatableRecordCallback.Parameters(value, validator, handler, validation, message);

    } as RecordValueCallbackReturn<ValidatorType, Result, ValidatableType, Message>;
}



export type RecordValueCallbackArgument<
    ValidatorType extends Validator = Validator,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    Message = unknown,
> =
    ValidatorContainer<ValidatorType> &
    MessageType<(result:Result)=>Message> &
    {handler: (argument : Value<Partial<Record<PropertyKey, InferBase<ValidatorType>>>> & ValidatorContainer<ValidatorType>) => Result} &
    {validation: (result: Result) => ValidatableType};


export function RecordValueCallbackParameter<
    ValidatorType extends Validator = Validator,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    Message = unknown,
>(
    {validator, handler, validation, message} : RecordValueCallbackArgument<ValidatorType, Result, ValidatableType, Message>
) : RecordValueCallbackReturn<ValidatorType, Result, ValidatableType, Message> {

    return RecordValueCallbackParameters(
        validator,
        (value, validator) =>handler({value, validator}),
        validation,
        message
    );
}



export type RecordValueCallbackReturn<
    ValidatorTemplate extends Validator,
    Result extends Partial<Record<PropertyKey, Instance>>,
    ValidatableTemplate extends Validatable ,
    MessageTemplate,
    > =
    SimpleValidator<
        Record<PropertyKey, InferBase<ValidatorTemplate>>,
        Record<PropertyKey, InferType<ValidatorTemplate>>,
        MessageTemplate,
        RecordValueCallbackContext<Record<PropertyKey, InferBase<ValidatorTemplate>>, ValidatorTemplate, Result, ValidatableTemplate>
        // RecordValueCallbackContext</*Record<PropertyKey, InferBase<ValidatorTemplate>>, ValidatorTemplate, */Result/*, ValidatableTemplate*/>
        // ValidatableRecord<MessageTemplate, Record<PropertyKey, InferBase<ValidatorTemplate>>, ValidatorTemplate, Result, ValidatableTemplate>>
    >;




namespace RecordValueCallback {
    export const Parameters = RecordValueCallbackParameters;
    export const Parameter = RecordValueCallbackParameter;
    export type Argument<
        ValidatorType extends Validator = Validator,
        Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
        ValidatableType extends Validatable = Validatable,
        Message = unknown,
    > = RecordValueCallbackArgument<
        ValidatorType,
        Result,
        ValidatableType,
        Message
    >;

    export type Return<
        ValidatorTemplate extends Validator,
        Result extends Partial<Record<PropertyKey, Instance>>,
        ValidatableTemplate extends Validatable ,
        MessageTemplate,
    > = RecordValueCallbackReturn<
        ValidatorTemplate,
        Result,
        ValidatableTemplate,
        MessageTemplate
    >;
}
export default RecordValueCallback;
