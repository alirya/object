import StringType from "../string/object";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

export default Object_;
namespace Object_ {

    export const Parameter = ObjectParameter;
    export const Object = ObjectObject;
    export type Argument = ObjectArgument;
}


export function ObjectParameter(
    value : unknown,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value,
    //{
    //    value,
    //    subject = 'type',
    //    conversion = value=>typeof value,
    //} : Value & {subject?: string} & {conversion:(value:unknown)=>string}
) : Error {

    return new Error(StringType.Parameter(value, false, subject, conversion))
}

export type ObjectArgument = Value & {subject?: string} & {conversion:(value:unknown)=>string};

export function ObjectObject(
    // string : unknown,
    // subject : string = 'type',
    // conversion : (value:unknown)=>string = value=>typeof value,
    {
        value,
        subject = 'type',
        conversion = value=>typeof value,
    } : Value & {subject?: string} & {conversion:(value:unknown)=>string}
) : Error {

    return ObjectParameter(value, subject, conversion)
}
