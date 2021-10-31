import NotEmptyType from "../string/not-Empty";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Property from "../../property/property/property";

export default NotEmpty;
namespace NotEmpty {

    export const Parameter = NotEmptyParameter;
    export const Object = NotEmptyObject;
    export type Argument = NotEmptyArgument;
}


export function NotEmptyParameter(
    // string : object,
    // subject : string = 'object',
    //{
        value,
        subject = 'object',

   // } : Value & {subject?: string}
) : Error {

    return new Error(NotEmptyType.Parameter(value, false, subject))
}

export type NotEmptyArgument = Validatable & Property & {type : string} & { validation: string };


export function NotEmptyObject(
    // string : object,
    // subject : string = 'object',
    {
        value,
        subject = 'object',

    } : Value & {subject?: string}
) : Error {

    return NotEmptyParameter(value, subject);
}
