import ValueValidationArgumentValidation from '../../../assert/string/value-validation';
import Name from '../../../string/name';
import PropertyInterface from '../property';
import Validation from '@alirya/boolean/validation/validation';

export function ValueValidationParameters(
    property : PropertyKey,
    type : string,
    validation : (...arg: any[]) => boolean
) : Error {

    let message = ValueValidationArgumentValidation.Parameters(
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
