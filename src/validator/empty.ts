import Validator from '@axiona/validator/validator.js';
import EmptyValidatable, {EmptyType as EmptyParametersReturn} from '../validatable/empty.js';
import EmptyString from '../assert/string/empty.js';
import {ValidatableParameters} from '@axiona/validator/message/function/validatable.js';
import {EmptyType as EmptyParameterReturn} from '../validatable/empty.js';
import {ValidatableParameter} from '@axiona/validator/message/function/validatable.js';


export function EmptyParameters() : Validator<object, object, boolean, boolean, string>;

export function EmptyParameters<MessageType>(
    message : ValidatableParameters<object, MessageType>
) : Validator<object, object, boolean, boolean, MessageType>;


export function EmptyParameters<MessageType>(
    message : ValidatableParameters<object, MessageType|string> = EmptyString.Parameters
) : Validator<object, object, boolean, boolean, MessageType|string> {

    return function (value) {

        return new EmptyValidatable.Parameters(value, message);

    };
}




export function EmptyParameter() : Validator<object, object, boolean, boolean, string>;

export function EmptyParameter<MessageType>(
    message : ValidatableParameter<object, MessageType>
) : Validator<object, object, boolean, boolean, MessageType>;


export function EmptyParameter<MessageType>(
    message : ValidatableParameter<object, MessageType|string> = EmptyString.Parameter
) : Validator<object, object, boolean, boolean, MessageType|string> {

    return EmptyParameters((value, valid) => message({valid, value}));
}




namespace Empty {
    export const Parameters = EmptyParameters;
    export const Parameter = EmptyParameter;
}
export default Empty;
