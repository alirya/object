import NameNotFoundParameters from "./name-not-found-parameters";
import NameNotFoundParameter from "./name-not-found-parameter";
var NameNotFound;
(function (NameNotFound) {
    NameNotFound.Parameters = NameNotFoundParameters;
    NameNotFound.Parameter = NameNotFoundParameter;
})(NameNotFound || (NameNotFound = {}));
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
//# sourceMappingURL=name-not-found.js.map