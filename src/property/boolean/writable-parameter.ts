import Value from '@alirya/value/value';
import Property from '../property/property';
import WritableParameters from './writable-parameters';

export type WritableArgument = Value<object> & Property;

export default function WritableParameter (
    {
        value,
        property,
    } : WritableArgument
) : boolean {

    return WritableParameters(value, property);
}
