import Validatable from "@alirya/validatable/validatable";
import Value from "@alirya/value/value";
import ObjectParameters from "./objecparameters";

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
