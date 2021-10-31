import Name from "../../string/name";
import SentencesMust from "@dikac/t-string/message/sentences-must";
export default NotEmpty;
var NotEmpty;
(function (NotEmpty) {
    NotEmpty.Parameter = NotEmptyParameter;
    NotEmpty.Object = NotEmptyObject;
})(NotEmpty || (NotEmpty = {}));
/**
 * string intended for not NotEmpty object
 *
 * @param valid
 * @param value
 * @param subject
 */
export function NotEmptyParameter(value, valid, subject = ''
//{
//    valid,
//    value,
//    subject = '',
//
//} : Validatable & Value<object> & {subject?: string}
) {
    const sentence = SentencesMust(valid);
    sentence.accept = ['is not'];
    sentence.reject = ['must not'];
    sentence.subject.push(subject);
    sentence.subject.push(Name(value));
    sentence.expect = ['NotEmpty object'];
    return sentence.message;
}
export function NotEmptyObject(
//valid : boolean,
//value : object,
//subject : string = '',
{ valid, value, subject = '', }) {
    return NotEmptyParameter(valid, value, subject);
}
//# sourceMappingURL=not-Empty.js.map