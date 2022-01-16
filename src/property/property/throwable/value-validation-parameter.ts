import PropertyInterface from "../property";
import Validation from "@alirya/boolean/validation/validation";
import PropertyValueParameters from "./value-validation-parameters";



export default function PropertyValueParameter(
    {property, type, validation} : PropertyInterface & {type : string} & Validation<any[]>
) : Error {

    return PropertyValueParameters(property, type, validation);
}
