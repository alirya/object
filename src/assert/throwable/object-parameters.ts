import StringType from "../string/object-parameters";

export default function ObjectParameters(
    value : unknown,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value,
) : Error {

    return new Error(StringType(value, false, subject, conversion))
}

