import ValueValidationArgumentValidation from '../../../assert/string/value-validation.js';
import Name from '../../../string/name.js';
import PropertyInterface from '../property.js';
import Validation from '@alirya/boolean/validation/validation.js';

export function ValueValidationParameters(
    property : PropertyKey,
    type : string,
    validation : (...arg: any[]) => boolean
) : Error {

    const message = ValueValidationArgumentValidation.Parameters(
        property,
        false,
        type,
        Name(validation)
    );

    return new Error(message);
}






export function ValueValidationParameter(
    {property, type, validation} : PropertyInterface & {type : string} & Validation<any[]>
) : Error {

    return ValueValidationParameters(property, type, validation);
}


namespace ValueValidation {
    export const Parameters = ValueValidationParameters;
    export const Parameter = ValueValidationParameter;
}
export default ValueValidation;
