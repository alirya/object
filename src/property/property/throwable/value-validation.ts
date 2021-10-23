import PropertyValueArgumentValidation from "../../../assert/string/value-validation";
import PropertyInterface from "../property";
import Value from "@dikac/t-value/value";
import Validation from "@dikac/t-boolean/validation/validation";
import Name from "../../../string/name";

export default function PropertyValue(
    {property, type, validation} : PropertyInterface & {type : string} & Validation<any[]>
) : Error {

    let message = PropertyValueArgumentValidation({
        valid: false,
        property,
        type,
        validation:Name(validation)
    });

    return new Error(message);
}
