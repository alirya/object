import EmptyType from "../string/empty";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

export default function Empty(
    // value : object,
    // subject : string = 'object',
    {
        value,
        subject = 'object',

    } : Value & {subject?: string}
) : Error {

    return new Error(EmptyType({valid:false, value, subject}))
}
