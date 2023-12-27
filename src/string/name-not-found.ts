import Validatable from '@axiona/validatable/validatable.js';
import Value from '@axiona/value/value.js';

export function NameNotFoundParameters(
    valid : boolean,
    value : unknown,
    subject  = 'type',
    conversion : (value:unknown)=>string = value=>typeof value,
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('have');

    } else {

        strings.push('does not have');
    }

    strings.push('prototype name');

    if(!valid) {

        strings.push(conversion(value));
    }

    return strings.join(' ') + '.';
}


export type NameNotFoundArgument = Validatable & Value & {
    subject ?: string;
    conversion ?: (value:unknown)=>string;
};

export function NameNotFoundParameter(
    {
        valid,
        value,
        subject = 'type',
        conversion = value=>typeof value,
    } : NameNotFoundArgument
) : string {

    return NameNotFoundParameters(valid, value, subject, conversion);
}


namespace NameNotFound {
    export const Parameters = NameNotFoundParameters;
    export const Parameter = NameNotFoundParameter;
    export type Argument = NameNotFoundArgument;
}
export default NameNotFound;
