import Validator from '@alirya/validator/validator.js';
import NotEmptyValidatable, {NotEmptyType as NotEmptyParametersReturn} from '../validatable/not-empty.js';
import NotEmptyString from '../assert/string/not-empty.js';
import Dynamic from '@alirya/validator/message/function/validatable.js';
import {NotEmptyType as NotEmptyParameterReturn} from '../validatable/not-empty.js';

export function NotEmptyParameters<MessageType>() : Validator<object, object, boolean, boolean, string>;

export function NotEmptyParameters<MessageType>(
    message : Dynamic.Parameters<object, MessageType>
) : Validator<object, object, boolean, boolean, MessageType>;

export function NotEmptyParameters<MessageType>(
    message : Dynamic.Parameters<object, MessageType|string> = NotEmptyString.Parameters
) : Validator<object, object, boolean, boolean, MessageType|string> {

    return function (value) {

        return new NotEmptyValidatable.Parameters(value, message);

    };
}


export function NotEmptyParameter<MessageType>() : Validator<object, object, boolean, boolean, string>;

export function NotEmptyParameter<MessageType>(
    message : Dynamic.Parameter<object, MessageType>
) : Validator<object, object, boolean, boolean, MessageType>;

export function NotEmptyParameter<MessageType>(
    message : Dynamic.Parameter<object, MessageType|string> = NotEmptyString.Parameter
) : Validator<object, object, boolean, boolean, MessageType|string> {

    return NotEmptyParameters((value, valid) => message({valid, value}));

}


namespace NotEmpty {
    export const Parameters = NotEmptyParameters;
    export const Parameter = NotEmptyParameter;
}
export default NotEmpty;
