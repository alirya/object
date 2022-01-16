import Value from '@alirya/value/value';
import ObjectParameters from './objecparameters';

export type ObjectArgument = Value & {subject?: string} & {conversion:(value:unknown)=>string};

export default function ObjectParameter(
    {
        value,
        subject = 'type',
        conversion = value=>typeof value,
    } : ObjectArgument
) : Error {

    return ObjectParameters(value, subject, conversion);
}
