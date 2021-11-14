import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import EmptyParameters from "./empty-parameters";

//
// export default Empty;
// namespace Empty {
//
//     export const Parameter = EmptyParameter;
//     export const Object = EmptyObject;
//     export type Argument = EmptyArgument;
// }
//
//
// /**
//  * string intended for empty object
//  *
//  * @param valid
//  * @param value
//  * @param subject
//  */
//
// export function EmptyParameter(
//    value : object,
//    valid : boolean,
//    subject : string = '',
//     //{
//     //    valid,
//     //    value,
//     //    subject = '',
// //
//     //} : Validatable & Value & {subject?: string}
// ) : string {
//
//     const sentence = SentencesMust(valid);
//
//     sentence.subject.push(subject);
//     sentence.subject.push(`"${Name(value)}"`);
//     sentence.expect = ['empty object'];
//     return sentence.message;
// }

export type EmptyArgument = Validatable & Value<object> & {subject?: string};

export default function EmptyParameter(
    //valid : boolean,
    //value : object,
    //subject : string = '',
    {
        valid,
        value,
        subject = '',

    } : EmptyArgument
) : string {

    return EmptyParameters(value, valid, subject)
}
