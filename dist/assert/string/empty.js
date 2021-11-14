import EmptyParameter from "./empty-parameter";
import EmptyParameters from "./empty-parameters";
var Empty;
(function (Empty) {
    Empty.Parameter = EmptyParameter;
    Empty.Parameters = EmptyParameters;
})(Empty || (Empty = {}));
export default Empty;
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
//
// export type EmptyArgument = Validatable & Value<object> & {subject?: string};
//
// export function EmptyObject(
//     //valid : boolean,
//     //value : object,
//     //subject : string = '',
//     {
//         valid,
//         value,
//         subject = '',
//
//     } : EmptyArgument
// ) : string {
//
//     return EmptyParameter(value, valid, subject)
// }
//# sourceMappingURL=empty.js.map