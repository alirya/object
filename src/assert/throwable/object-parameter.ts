import Value from "@dikac/t-value/value";
import ObjectParameters from "./object-parameters";

export type ObjectArgument = Value & {subject?: string} & {conversion:(value:unknown)=>string};

export default function ObjectParameter(
    // string : unknown,
    // subject : string = 'type',
    // conversion : (value:unknown)=>string = value=>typeof value,
    {
        value,
        subject = 'type',
        conversion = value=>typeof value,
    } : ObjectArgument
) : Error {

    return ObjectParameters(value, subject, conversion)
}
