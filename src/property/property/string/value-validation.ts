import ValueValidationArgumentValidation from '../../../assert/string/value-validation';
import Name from '../../../string/name';
import PropertyInterface from '../property';
import Validatable from '@alirya/validatable/validatable';
import Validation from '@alirya/boolean/validation/validation';

export function ValueValidationParameters(
  property : PropertyKey,
  valid : boolean,
  validation : (...arg: any[]) => boolean,
  type : string
) : string {

    return ValueValidationArgumentValidation.Parameters(
        property,
        valid,
        type,
        Name(validation)
    );
}



export type ValueValidationArgument = PropertyInterface & {type : string} & Validatable & Validation<any[]>;

export function ValueValidationParameter({
  valid,
  validation,
  property,
  type
} : ValueValidationArgument) : string {

    return ValueValidationParameters(
        property,
        valid,
        validation,
        type,
    );
}


namespace ValueValidation {
    export const Parameters = ValueValidationParameters;
    export const Parameter = ValueValidationParameter;
    export type Argument = ValueValidationArgument;
}
export default ValueValidation;
