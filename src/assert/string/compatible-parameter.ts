import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
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
