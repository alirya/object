import PropertyValueValidationMessage from "../string/value-validation";
import Validatable from "@dikac/t-validatable/validatable";
import Property from "../../property/property/property";

export default function ValueValidation(
    //property : PropertyKey,
    //type : string,
    //validation : string,
    {
        property,
        type,
        validation,
    } : Validatable & Property & {type : string} & { validation: string }
) : Error {

    return new Error(
        PropertyValueValidationMessage({valid:false, property, type, validation})
    );
}
