import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import NotEmptyParameters from "./not-empty-parameters";

export type NotEmptyArgument = Validatable & Value<object> & {subject?: string};

export default function NotEmptyParameter(
    {
        valid,
        value,
        subject = '',

    } : NotEmptyArgument
) : string {

    return NotEmptyParameters(value, valid, subject)
}
