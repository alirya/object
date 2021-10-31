import EmptyType from "../string/empty";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

export default Empty;
namespace Empty {

    export const Parameter = EmptyParameter;
    export const Object = EmptyObject;
    export type Argument = EmptyArgument;
}


export function EmptyParameter(
     value : object,
     subject : string = 'object',
   //{
   //    value,
   //    subject = 'object',

   //} : Value & {subject?: string}
) : Error {

    return new Error(EmptyType.Parameter(value, false, subject))
}

export type EmptyArgument = Value<object> & {subject?: string};

export function EmptyObject(
    // value : object,
    // subject : string = 'object',
    {
        value,
        subject = 'object',

    } : EmptyArgument
) : Error {

    return EmptyParameter(value, subject)
}
