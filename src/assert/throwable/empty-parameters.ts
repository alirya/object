import EmptyType from "../string/empty";

export default function EmptyParameters(
     value : object,
     subject : string = 'object',
   //{
   //    value,
   //    subject = 'object',

   //} : Value & {subject?: string}
) : Error {

    return new Error(EmptyType.Parameters(value, false, subject))
}

