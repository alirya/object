import Value from "@dikac/t-value/value";
import EmptyParameters from "./empty-parameters";

export type EmptyArgument = Value<object> & {subject?: string};

export default function EmptyParameter(
    // value : object,
    // subject : string = 'object',
    {
        value,
        subject = 'object',

    } : EmptyArgument
) : Error {

    return EmptyParameters(value, subject)
}
