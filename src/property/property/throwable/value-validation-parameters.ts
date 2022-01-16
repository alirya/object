import PropertyValueArgumentValidation from '../../../assert/string/value-validation-parameters';
import Name from '../../../string/name';

export default function PropertyValueParameters(
    property : PropertyKey,
    type : string,
    validation : (...arg: any[]) => boolean
) : Error {

    let message = PropertyValueArgumentValidation(
        property,
        false,
        type,
        Name(validation)
    );

    return new Error(message);
}


