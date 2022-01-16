import Validatable from "@alirya/validatable/validatable";
import Value from "@alirya/value/value";
import CompatibleParameters from "./compatible-parameters";

export type CompatibleArgument = Validatable &
    Value &
    {   expect : string;
        subject?: string;
        conversion:(value:unknown)=>string
    };

export default function CompatibleParameter(
    {
        valid,
        value,
        expect,
        subject = 'type',
        conversion = value=>typeof value,
    } : CompatibleArgument
) : string {

    return CompatibleParameters(value, valid, expect, subject, conversion);
}
