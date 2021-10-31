import Value from "@dikac/t-value/value";
import Property from "../property/property/property";
import {ObjectArgument, ObjectObject, ObjectParameter} from "../assert/throwable/object";

export default FromObject;
namespace FromObject {

    export const Parameter = FromObjectParameter;
    export const Object = FromObjectObject;
    export type Argument = FromObjectArgument;
}

export function FromObjectParameter(value : object, property : PropertyKey) : undefined|PropertyDescriptor {

    // direct
    {
        let descriptor = Object.getOwnPropertyDescriptor(value, property);

        if(descriptor) {

            return descriptor;
        }
    }

    // prototype chain
    {
        for(value = Object.getPrototypeOf(value); value; value = Object.getPrototypeOf(value)) {

            let descriptor = Object.getOwnPropertyDescriptor(value, property);

            if(descriptor) {

                return descriptor;
            }
        }
    }
}

export type FromObjectArgument = Value<object> & Property;

export function FromObjectObject(
    {value, property} : FromObjectArgument
) : undefined|PropertyDescriptor {

    return FromObjectParameter(value, property);
}
