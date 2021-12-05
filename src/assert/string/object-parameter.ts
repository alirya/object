import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import ObjectParameters from "./object-parameters";

export type ObjectArgument = Validatable & Value & {subject?: string} & {conversion?:(value:unknown)=>string};

export default function ObjectParameter(
    {
        valid,
        value,
        subject = 'type',
        conversion = value=>typeof value,
    } : ObjectArgument
) : string {

    return ObjectParameters(value, valid, subject, conversion);
}
