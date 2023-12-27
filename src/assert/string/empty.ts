import Name from '../../string/name.js';
import Validatable from '@axiona/validatable/validatable.js';
import Value from '@axiona/value/value.js';

/**
 * string intended for empty object
 *
 * @param valid
 * @param value
 * @param subject
 */

export function EmptyParameters(
   value : object,
   valid : boolean,
   subject  = '',
) : string {

    const strings : string[] = [];

    strings.push(subject);
    strings.push(`"${Name(value)}"`);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('empty object');

    return (strings.join(' ') + '.').trim();
}


export type EmptyArgument = Validatable & Value<object> & {subject?: string};

export function EmptyParameter(
    {
        valid,
        value,
        subject = '',

    } : EmptyArgument
) : string {

    return EmptyParameters(value, valid, subject);
}


namespace Empty {
    export const Parameters = EmptyParameters;
    export const Parameter = EmptyParameter;
    export type Argument = EmptyArgument;
}
export default Empty;
