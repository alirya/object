import GetDescriptor from "../../descriptor/boolean/getter";
import Descriptor from "../../descriptor/from-object";
import HasProperty from "./exists";
import Value from "@dikac/t-value/value";
import Property from "../property/property";
import {ObjectArgument} from "../../assert/throwable/object";
import {PropertyObject, PropertyParameter} from "../../message/property";

export default Readable;
namespace Readable {

    export const Parameter = ReadableParameter;
    export const Object = ReadableObject;
    export type Argument = ReadableArgument;
}

/**
 * check if property is readable
 */
export function ReadableParameter (
    value : object,
    property : PropertyKey
) : boolean {

    let descriptor = Descriptor.Parameter(value, property);

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

export type ReadableArgument = Value<object> & Property;

export function ReadableObject (
    {
        value,
        property,
    } : ReadableArgument
) : boolean {

    return ReadableParameter(value, property);
}
