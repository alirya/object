import Validatable from "@dikac/t-validatable/validatable";
import Property from "../../property/property/property";
import ValueValidationParameters from "./value-validation-parameters";

export type ValueValidationArgument = Validatable & Property & {type : string} & { validation: string };

export default function ValueValidationParameter(
    {
        property,
        type,
        validation,
    } : ValueValidationArgument
) : Error {

    return ValueValidationParameters(property, type, validation);
}
