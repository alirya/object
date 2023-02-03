import Validator from '@alirya/validator/validator';
import EmptyValidatable, {EmptyType as EmptyParametersReturn} from '../validatable/empty';
import EmptyString from '../assert/string/empty';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable';
import {EmptyType as EmptyParameterReturn} from '../validatable/empty';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable';


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
