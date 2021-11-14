import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import NameNotFoundParameters from "./name-not-found-parameters";

export type NameNotFoundArgument = Validatable & Value & {
    subject ?: string;
    conversion ?: (value:unknown)=>string;
};

export default function NameNotFoundParameter(
    {
        valid,
        value,
        subject = 'type',
        conversion = value=>typeof value,
    } : NameNotFoundArgument
) : string {

    return NameNotFoundParameters(valid, value, subject, conversion);
}
