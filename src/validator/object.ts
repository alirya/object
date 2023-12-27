import Validator from '@axiona/validator/simple.js';
import ObjectValidatable from '../validatable/object.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import ObjectString from '../assert/string/object.js';
import Simple from '@axiona/validator/message/function/simple.js';

export function ObjectParameters() : Validator<unknown, object, string>;

export function ObjectParameters<MessageType>(
    message : Simple.Parameters<unknown, object, MessageType>
) : Validator<unknown, object, MessageType>;

export function ObjectParameters<MessageType>(
    message : Simple.Parameters<unknown, object, MessageType|string> = ObjectString.Parameters
) : Validator<unknown, object, MessageType|string> {

    return function (value ) {

        return  ObjectValidatable.Parameters(value, message);

    } as Validator<unknown, object, MessageType|string>;
}


export function ObjectParameter() : Validator<unknown, object, string>;

export function ObjectParameter<MessageType>(
    message : Simple.Parameter<unknown, object, MessageType>
) : Validator<unknown, object, MessageType>;

export function ObjectParameter<MessageType>(
    message : Simple.Parameter<unknown, object, MessageType|string> = ObjectString.Parameter
) : Validator<unknown, object, MessageType|string> {

    if(message) {

        return ObjectParameters((value, valid) => message({value, valid}));

    } else {

        return ObjectParameters();
    }
}


namespace Object {
    export const Parameters = ObjectParameters;
    export const Parameter = ObjectParameter;
}
export default Object;
