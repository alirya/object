import PropertyInterface from "../property";
import Validatable from "@dikac/t-validatable/validatable";
import Validation from "@dikac/t-boolean/validation/validation";
import PropertyValueParameters from "./value-validation-parameters";

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
