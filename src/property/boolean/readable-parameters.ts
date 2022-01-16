import GetDescriptor from '../../descriptor/boolean/getter';
import Descriptor from '../../descriptor/from-object-parameters';
import HasProperty from './exists';

/**
 * check if property is readable
 */
export default function ReadableParameters (
    value : object,
    property : PropertyKey
) : boolean {

    let descriptor = Descriptor(value, property);

    if(!descriptor) {

        return false;
    }

    if(HasProperty(descriptor, 'value')) {

        return true;
    }

    // getter
    if(GetDescriptor(descriptor)) {

        return true;
    }

    return false;
}
