import SetDescriptor from '../../descriptor/boolean/setter.js';
import PropertyDescriptor from '../../descriptor/boolean/property.js';
import Descriptor from '../../descriptor/from-object.js';
import HasProperty from './exists.js';
import Value from '@alirya/value/value.js';
import Property from '../property/property.js';


/**
 * check if property is writable
 */
export function WritableParameters (value : object, property : PropertyKey) : boolean {

    let descriptor = Descriptor.Parameters(value, property);

    if(!descriptor) {

        return false;
    }

    // property
    // all descriptor property must true
    if(PropertyDescriptor(descriptor) && HasProperty.Parameters(descriptor, 'writable') && descriptor.writable) {

        return true;
    }

    // setter
    if(SetDescriptor(descriptor)) {

        return true;
    }

    return false;
}



export type WritableArgument = Value<object> & Property;

export function WritableParameter (
    {
        value,
        property,
    } : WritableArgument
) : boolean {

    return WritableParameters(value, property);
}


namespace Writable {
    export const Parameters = WritableParameters;
    export const Parameter = WritableParameter;
    export type Argument = WritableArgument;
}
export default Writable;
