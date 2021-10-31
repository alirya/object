import SetDescriptor from "../../descriptor/boolean/setter";
import PropertyDescriptor from "../../descriptor/boolean/property";
import Descriptor from "../../descriptor/from-object";
import HasProperty from "./exists";
import Value from "@dikac/t-value/value";
import Property from "../property/property";
import {ReadableParameter} from "./readable";

export default Writable;
namespace Writable {

    export const Parameter = ReadableParameter;
    export const Object = ReadableObject;
    export type Argument = ReadableArgument;
}


/**
 * check if property is writable
 */
export function WritableParameter (value : object, property : PropertyKey) : boolean {

    let descriptor = Descriptor.Parameter(value, property);

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


export type ReadableArgument = Value<object> & Property;

export function ReadableObject (
    {
        value,
        property,
    } : ReadableArgument
) : boolean {

    return ReadableParameter(value, property);
}
