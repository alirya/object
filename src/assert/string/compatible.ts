import Validatable from '@axiona/validatable/validatable.js';
import Value from '@axiona/value/value.js';

export function CompatibleParameters(
   value : unknown,
   valid : boolean,
   expect : string,
   subject  = 'type',
   conversion : (value:unknown)=>string = value=>typeof value,
) : string {

    const messages : string[] = [];
    messages.push(subject);

    if(valid) {

        messages.push('is');

    } else {

       messages.push('must');
    }

    messages.push('compatible with', expect);

    if(!valid) {

        messages[3] = `${messages[3]},`;

        messages.push('actual', conversion(value));
    }

    return messages.join(' ') + '.';
}

export type CompatibleArgument = Validatable &
    Value &
    {   expect : string;
        subject?: string;
        conversion:(value:unknown)=>string
    };

export function CompatibleParameter(
    {
        valid,
        value,
        expect,
        subject = 'type',
        conversion = value=>typeof value,
    } : CompatibleArgument
) : string {

    return CompatibleParameters(value, valid, expect, subject, conversion);
}


namespace Compatible {
    export const Parameters = CompatibleParameters;
    export const Parameter = CompatibleParameter;
    export type Argument = CompatibleArgument;
}
export default Compatible;
