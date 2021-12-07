import Property from "../../property/property/property";
import ValueParameters from "./value-parameters";

export type ValueArgument = {type:string} & Property;

export default function ValueParameter(
    {
        property,
        type
    } : ValueArgument
) : Error {

    return ValueParameters(property, type);
}
