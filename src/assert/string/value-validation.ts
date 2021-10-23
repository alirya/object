import Value from "./value";
import Validatable from "@dikac/t-validatable/validatable";
import Property from "../../property/property/property";

export default function ValueValidation(
    // valid : boolean,
    // property : PropertyKey,
    // type : string,
    // validation : string,
    {
        valid,
        property,
        type,
        validation,
    } : Validatable & Property & {type : string} & { validation: string }
) : string {

    let message = Value({valid, property, type});

    return `${message}, against "${validation}"`;

}
