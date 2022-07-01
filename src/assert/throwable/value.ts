import PropertyValueMessage from '../string/value';
import Property from '../../property/property/property';

export function ValueParameters(
    property : PropertyKey,
    type : string,
) : Error {

    return new Error(PropertyValueMessage.Parameters(property, false, type));
}



export type ValueArgument = {type:string} & Property;

export function ValueParameter(
    {
        property,
        type
    } : ValueArgument
) : Error {

    return ValueParameters(property, type);
}


namespace Value {
    export const Parameters = ValueParameters;
    export const Parameter = ValueParameter;
    export type Argument = ValueArgument;
}
export default Value;
