import PropertyInterface from '../property';
import Validatable from '@alirya/validatable/validatable';
import Validation from '@alirya/boolean/validation/validation';
import PropertyValueParameters from './value-validation-parameters';

export type PropertyValueArgument = PropertyInterface & {type : string} & Validatable & Validation<any[]>;

export default function PropertyValueParameter({
  valid,
  validation,
  property,
  type
} : PropertyValueArgument) : string {

    return PropertyValueParameters(
        property,
        valid,
        validation,
        type,
    );
}
