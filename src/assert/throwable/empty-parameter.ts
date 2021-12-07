import Value from "@dikac/t-value/value";
import EmptyParameters from "./empty-parameters";

export type EmptyArgument = Value<object> & {subject?: string};

export default function EmptyParameter(
    {
        value,
        subject = 'object',

    } : EmptyArgument
) : Error {

    return EmptyParameters(value, subject)
}
