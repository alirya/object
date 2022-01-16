import Value from '@alirya/value/value';
import ObjectParameters from './objecparameters';

export type ObjectArgument = Value<unknown> & {error ?: (value:unknown)=>Error};

export default function ObjectParameter(
    {
        value,
        error ,
    } : ObjectArgument
) : object {

    return ObjectParameters(value, error);

}
