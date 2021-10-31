import Value, {ValueArgument, ValueObject, ValueParameter} from "./value";
import Validatable from "@dikac/t-validatable/validatable";
import Property from "../../property/property/property";

export default ValueValidation;
namespace ValueValidation {

    export const Parameter = ValueValidationParameter;
    export const Object = ValueValidationObject;
    export type Argument = ValueValidationArgument;
}


export function ValueValidationParameter(
    property : PropertyKey,
    valid : boolean,
    type : string,
    validation : string,
    // {
    //     valid,
    //     property,
    //     type,
    //     validation,
    // } : Validatable & Property & {type : string} & { validation: string }
) : string {

    let message = Value.Parameter(property, valid, type);

    return `${message}, against "${validation}"`;

}

export type ValueValidationArgument = Validatable & Property & {type : string} & { validation: string };

export function ValueValidationObject(
    // valid : boolean,
    // property : PropertyKey,
    // type : string,
    // validation : string,
    {
        valid,
        property,
        type,
        validation,
    } : ValueValidationArgument
) : string {

    let message = Value.Parameter(property, valid, type);

    return `${message}, against "${validation}"`;

}
