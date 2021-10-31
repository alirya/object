import SentencesMust from "@dikac/t-string/message/sentences-must";
export default Object_;
var Object_;
(function (Object_) {
    Object_.Parameter = ObjectParameter;
    Object_.Object = ObjectObject;
})(Object_ || (Object_ = {}));
export function ObjectParameter(value, valid, subject = 'type', conversion = value => typeof value) {
    let sentence = SentencesMust(valid);
    sentence.expect.push('object');
    sentence.subject.push(subject);
    sentence.comma.push('expect');
    if (!valid) {
        sentence.actual.push('actual', conversion(value));
    }
    return sentence.message;
}
export function ObjectObject(
//valid : boolean,
//value : unknown,
//subject : string = 'type',
//conversion : (value:unknown)=>string = value=>typeof value,
{ valid, value, subject = 'type', conversion = value => typeof value, }) {
    return ObjectParameter(value, valid, subject, conversion);
}
//# sourceMappingURL=object.js.map