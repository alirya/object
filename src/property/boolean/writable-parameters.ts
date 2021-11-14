import SetDescriptor from "../../descriptor/boolean/setter";
import PropertyDescriptor from "../../descriptor/boolean/property";
import Descriptor from "../../descriptor/from-object";
import HasProperty from "./exists";


/**
 * check if property is writable
 */
export default function WritableParameters (value : object, property : PropertyKey) : boolean {

    let descriptor = Descriptor.Parameters(value, property);

    if(!descriptor) {

        return false;
    }

    // property
    // all descriptor property must true
    if(PropertyDescriptor(descriptor) && HasProperty(descriptor, 'writable') && descriptor.writable) {

        return true;
    }

    // setter
    if(SetDescriptor(descriptor)) {

        return true;
    }

    return false;
}

