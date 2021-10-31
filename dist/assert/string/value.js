import Sentence from "@dikac/t-string/message/sentence";
export default Value;
var Value;
(function (Value) {
    Value.Parameter = ValueParameter;
    Value.Object = ValueObject;
})(Value || (Value = {}));
/**
 * {@param valid} type is valid or not
 * {@param property} object property
 * {@param type} expected type
 */
export function ValueParameter(property, valid, type) {
    const sentence = new Sentence(valid);
    sentence.reject = 'value is not';
    sentence.accept = 'value is';
    sentence.subject = property.toString();
    sentence.expect = type;
    return sentence.message;
}
export function ValueObject(
// valid : boolean,
// property : PropertyKey,
// type : string,
{ valid, property, type, }) {
    return ValueParameter(property, valid, type);
}
//# sourceMappingURL=value.js.map