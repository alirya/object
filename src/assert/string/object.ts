import Validatable from '@alirya/validatable/validatable.js';
import Value from '@alirya/value/value.js';


export function ObjectParameters(
    value : unknown,
    valid : boolean,
    subject  = 'type',
    conversion : (value:unknown)=>string = value=>typeof value,
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('object');

    if(!valid) {

        strings[2] = `${strings[2]},`;

        strings.push('actual', conversion(value));
    }

    return strings.join(' ') + '.';
}

export type ObjectArgument = Validatable & Value & {subject?: string} & {conversion?:(value:unknown)=>string};

export function ObjectParameter(
    {
        valid,
        value,
        subject = 'type',
        conversion = value=>typeof value,
    } : ObjectArgument
) : string {

    return ObjectParameters(value, valid, subject, conversion);
}


namespace Object {
    export const Parameters = ObjectParameters;
    export const Parameter = ObjectParameter;
    export type Argument = ObjectArgument;
}
export default Object;
