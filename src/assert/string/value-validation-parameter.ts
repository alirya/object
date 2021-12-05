import Validatable from "@dikac/t-validatable/validatable";
import Property from "../../property/property/property";
import ValueValidationParameters from "./value-validation-parameters";

export type ValueValidationArgument = Validatable & Property & {type : string} & { validation: string };

export default function ValueValidationParameter(
    {
        valid,
        property,
        type,
        validation,
    } : ValueValidationArgument
) : string {

    return ValueValidationParameters(property, valid, type, validation);

}
