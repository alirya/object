import NotEmptyParameters from "./not-empty-parameters";
import NotEmptyParameter from "./not-empty-parameter";
var NotEmpty;
(function (NotEmpty) {
    NotEmpty.Parameters = NotEmptyParameters;
    NotEmpty.Parameter = NotEmptyParameter;
})(NotEmpty || (NotEmpty = {}));
export default NotEmpty;
//
// /**
//  * string intended for not NotEmpty object
//  *
//  * @param valid
//  * @param value
//  * @param subject
//  */
//
// export function NotEmptyParameter(
//     value : object,
//     valid : boolean,
//     subject : string = ''
//     //{
//     //    valid,
//     //    value,
//     //    subject = '',
// //
//     //} : Validatable & Value<object> & {subject?: string}
// ) : string {
//
//     const sentence = SentencesMust(valid);
//
//     sentence.accept = ['is not'];
//     sentence.reject = ['must not'];
//
//     sentence.subject.push(subject);
//     sentence.subject.push(Name(value));
//
//     sentence.expect = ['NotEmpty object'];
//
//     return sentence.message;
// }
//
//
// export type NotEmptyArgument = Validatable & Value<object> & {subject?: string};
//
// export function NotEmptyObject(
//     //valid : boolean,
//     //value : object,
//     //subject : string = '',
//     {
//         valid,
//         value,
//         subject = '',
//
//     } : NotEmptyArgument
// ) : string {
//
//     return NotEmptyParameter(valid, value, subject)
// }
//# sourceMappingURL=not-Empty.js.map