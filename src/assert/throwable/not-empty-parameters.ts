import NotEmptyType from "../string/not-Empty";

export default function NotEmptyParameters(
    // string : object,
    // subject : string = 'object',
    //{
        value,
        subject = 'object',

   // } : Value & {subject?: string}
) : Error {

    return new Error(NotEmptyType.Parameters(value, false, subject))
}
