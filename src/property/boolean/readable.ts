import GetDescriptor from '../../descriptor/boolean/getter';
import Descriptor from '../../descriptor/from-object';
import HasProperty from './exists';
import Value from '@alirya/value/value';
import Property from '../property/property';

/**
 * check if property is readable
 */
export function ReadableParameters (
    value : object,
    property : PropertyKey
) : boolean {

    let descriptor = Descriptor.Parameters(value, property);

    if(!descriptor) {

        return false;
    }

    if(HasProperty.Parameters(descriptor, 'value')) {

        return true;
    }

    // getter
    if(GetDescriptor(descriptor)) {

        return true;
    }

    return false;
}


export type ReadableArgument = Value<object> & Property;

export function ReadableParameter (
    {
        value,
        property,
    } : ReadableArgument
) : boolean {

    return ReadableParameters(value, property);
}


namespace Readable {
    export const Parameters = ReadableParameters;
    export const Parameter = ReadableParameter;
    export type Argument = ReadableArgument;
}
export default Readable;
