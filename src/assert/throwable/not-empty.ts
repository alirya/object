import NotEmptyType from '../string/not-empty.js';
import Value from '@axiona/value/value.js';

export function NotEmptyParameters(
    value,
    subject = 'object',
) : Error {

    return new Error(NotEmptyType.Parameters(value, false, subject));
}


export function NotEmptyParameter(
    {
        value,
        subject = 'object',

    } : Value & {subject?: string}
) : Error {

    return NotEmptyParameters(value, subject);
}


namespace NotEmpty {
    export const Parameters = NotEmptyParameters;
    export const Parameter = NotEmptyParameter;
}
export default NotEmpty;
