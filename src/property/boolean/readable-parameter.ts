import Value from '@alirya/value/value';
import Property from '../property/property';
import ReadableParameters from './readable-parameters';

export type ReadableArgument = Value<object> & Property;

export default function ReadableParameter (
    {
        value,
        property,
    } : ReadableArgument
) : boolean {

    return ReadableParameters(value, property);
}
