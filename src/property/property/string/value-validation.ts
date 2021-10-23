import PropertyInterface from "../property";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import PropertyValueArgumentValidation from "../../../assert/string/value-validation";
import Validation from "@dikac/t-boolean/validation/validation";
import Name from "../../../string/name";

export default function PropertyValue({
  valid,
  validation,
  property,
  type
} : PropertyInterface & {type : string} & Validatable & Validation<any[]>) : string {

    return PropertyValueArgumentValidation({
        valid,
        property,
        type,
        validation: Name(validation)
    });
}
