import Value from '@alirya/value/value.js';
import Property from '../property/property/property.js';

export function FromObjectParameters(value : object, property : PropertyKey) : undefined|PropertyDescriptor {

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

export function FromObjectParameter(
    {value, property} : FromObjectArgument
) : undefined|PropertyDescriptor {

    return FromObjectParameters(value, property);
}


namespace FromObject {
    export const Parameters = FromObjectParameters;
    export const Parameter = FromObjectParameter;
    export type Argument = FromObjectArgument;
}
export default FromObject;
