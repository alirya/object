import GetDescriptor from '../../descriptor/boolean/getter.js';
import Descriptor from '../../descriptor/from-object.js';
import HasProperty from './exists.js';
import Value from '@axiona/value/value.js';
import Property from '../property/property.js';

/**
 * check if property is readable
 */
export function ReadableParameters (
    value : object,
    property : PropertyKey
) : boolean {

    const descriptor = Descriptor.Parameters(value, property);

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
