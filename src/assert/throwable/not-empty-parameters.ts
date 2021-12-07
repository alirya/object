import NotEmptyType from "../string/not-empty-parameters";

export default function NotEmptyParameters(
    // string : object,
    // subject : string = 'object',
    //{
        value,
        subject = 'object',

   // } : Value & {subject?: string}
) : Error {

    return new Error(NotEmptyType(value, false, subject))
}
