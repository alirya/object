import EmptyType from "../string/empty-parameters";

export default function EmptyParameters(
     value : object,
     subject : string = 'object',
) : Error {

    return new Error(EmptyType(value, false, subject))
}

