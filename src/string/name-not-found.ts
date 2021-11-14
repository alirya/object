import NameNotFoundParameters from "./name-not-found-parameters";
import NameNotFoundParameter, {NameNotFoundArgument} from "./name-not-found-parameter";

namespace NameNotFound {

    export const Parameters = NameNotFoundParameters;
    export const Parameter = NameNotFoundParameter;
    export type Argument = NameNotFoundArgument;
}
export default NameNotFound;

//
// export function NameNotFoundParameter(
//     valid : boolean,
//     value : unknown,
//     subject : string = 'type',
//     conversion : (value:unknown)=>string = value=>typeof value,
//     //{
//     //    valid,
//     //    value,
//     //    subject = 'type',
//     //    conversion = value=>typeof value,
//     //} : Validatable & Value & {
//     //    subject ?: string;
//     //    conversion ?: (value:unknown)=>string;
//     //}
// ) : string {
//
//     let sentence = new Sentences(valid);
//     sentence.accept = ['have'];
//     sentence.reject = ['does not have'];
//     sentence.subject.push(subject);
//
//     sentence.expect.push('prototype name');
//
//     if(!valid) {
//
//         sentence.subject.push(conversion(value));
//     }
//
//     return sentence.message;
// }
//
// export type NameNotFoundArgument = Validatable & Value & {
//     subject ?: string;
//     conversion ?: (value:unknown)=>string;
// };
//
// export function NameNotFoundObject(
//     {
//         valid,
//         value,
//         subject = 'type',
//         conversion = value=>typeof value,
//     } : NameNotFoundArgument
// ) : string {
//
//     return NameNotFoundParameter(valid, value, subject, conversion);
// }
