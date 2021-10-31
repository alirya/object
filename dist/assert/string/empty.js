import Name from "../../string/name";
import SentencesMust from "@dikac/t-string/message/sentences-must";
export default Empty;
var Empty;
(function (Empty) {
    Empty.Parameter = EmptyParameter;
    Empty.Object = EmptyObject;
})(Empty || (Empty = {}));
/**
 * string intended for empty object
 *
 * @param valid
 * @param value
 * @param subject
 */
export function EmptyParameter(value, valid, subject = '') {
    const sentence = SentencesMust(valid);
    sentence.subject.push(subject);
    sentence.subject.push(`"${Name(value)}"`);
    sentence.expect = ['empty object'];
    return sentence.message;
}
export function EmptyObject(
//valid : boolean,
//value : object,
//subject : string = '',
{ valid, value, subject = '', }) {
    return EmptyParameter(value, valid, subject);
}
//# sourceMappingURL=empty.js.map