import StringType from '../string/object.js';
import Value from '@alirya/value/value.js';

export function ObjectParameters(
    value : unknown,
    subject  = 'type',
    conversion : (value:unknown)=>string = value=>typeof value,
) : Error {

    return new Error(StringType.Parameters(value, false, subject, conversion));
}


export type ObjectArgument = Value & {subject?: string} & {conversion:(value:unknown)=>string};

export function ObjectParameter(
    {
        value,
        subject = 'type',
        conversion = value=>typeof value,
    } : ObjectArgument
) : Error {

    return ObjectParameters(value, subject, conversion);
}


namespace Object {
    export const Parameters = ObjectParameters;
    export const Parameter = ObjectParameter;
    export type Argument = ObjectArgument;
}
export default Object;
