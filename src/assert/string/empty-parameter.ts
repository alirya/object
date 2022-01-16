import Validatable from "@alirya/validatable/validatable";
import Value from "@alirya/value/value";
import EmptyParameters from "./empty-parameters";

export type EmptyArgument = Validatable & Value<object> & {subject?: string};

export default function EmptyParameter(
    {
        valid,
        value,
        subject = '',

    } : EmptyArgument
) : string {

    return EmptyParameters(value, valid, subject)
}
