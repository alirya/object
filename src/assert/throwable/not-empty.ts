import NotEmptyType from "../string/not-empty";
import Value from "@dikac/t-value/value";

export default function NotEmpty(
    // string : object,
    // subject : string = 'object',
    {
        value,
        subject = 'object',

    } : Value & {subject?: string}
) : Error {

    return new Error(NotEmptyType({valid:false, value, subject}))
}
