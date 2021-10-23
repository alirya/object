import StringType from "../string/object";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

export default function Object_(
    // string : unknown,
    // subject : string = 'type',
    // conversion : (value:unknown)=>string = value=>typeof value,
    {
        value,
        subject = 'type',
        conversion = value=>typeof value,
    } : Value & {subject?: string} & {conversion:(value:unknown)=>string}
) : Error {

    return new Error(StringType({valid:false, value, subject, conversion}))
}
