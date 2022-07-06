import Value from './value.js';
import Validatable from '@alirya/validatable/validatable.js';
import Property from '../../property/property/property.js';

export function ValueValidationParameters(
    property : PropertyKey,
    valid : boolean,
    type : string,
    validation : string,
) : string {

    let message = Value.Parameters(property, valid, type);

    return `${message}, against "${validation}"`;
}


export type ValueValidationArgument = Validatable & Property & {type : string} & { validation: string };

export function ValueValidationParameter(
    {
        valid,
        property,
        type,
        validation,
    } : ValueValidationArgument
) : string {

    return ValueValidationParameters(property, valid, type, validation);

}


namespace ValueValidation {
    export const Parameters = ValueValidationParameters;
    export const Parameter = ValueValidationParameter;
    export type Argument = ValueValidationArgument;
}
export default ValueValidation;
