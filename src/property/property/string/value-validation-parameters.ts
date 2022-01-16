import PropertyValueArgumentValidation from '../../../assert/string/value-validation-parameters';
import Name from '../../../string/name';

export default function PropertyValueParameters(
  property : PropertyKey,
  valid : boolean,
  validation : (...arg: any[]) => boolean,
  type : string
) : string {

    return PropertyValueArgumentValidation(
        property,
        valid,
        type,
        Name(validation)
    );
}

