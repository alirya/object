import Validatable from '@alirya/validatable/validatable';
import Property from '../../property/property/property';
/**
 * {@param valid} type is valid or not
 * {@param property} object property
 * {@param type} expected type
 */
export function ValueParameters(
    property : PropertyKey,
    valid : boolean,
    type : string,
) : string {

    const strings : string[] = [];

    strings.push(property.toString());

    if(valid) {

        strings.push('value is');

    } else {

        strings.push('value is not');
    }

    strings.push(type);

    return strings.join(' ') + '.';
}


export type ValueArgument = Validatable & Property & {type : string};

export function ValueParameter(
    {
        valid,
        property,
        type,
    } : ValueArgument
) : string {

    return ValueParameters(property, valid, type);
}


namespace Value {
    export const Parameters = ValueParameters;
    export const Parameter = ValueParameter;
    export type Argument = ValueArgument;
}
export default Value;
