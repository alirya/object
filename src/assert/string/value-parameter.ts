import Validatable from "@dikac/t-validatable/validatable";
import Property from "../../property/property/property";
import ValueParameters from "./value-parameters";

export type ValueArgument = Validatable & Property & {type : string};

export default function ValueParameter(
    // valid : boolean,
    // property : PropertyKey,
    // type : string,
    {
        valid,
        property,
        type,
    } : ValueArgument
) : string {

    return ValueParameters(property, valid, type);
}
