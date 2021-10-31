import Sentences from "@dikac/t-string/message/sentences";
export default NameNotFound;
var NameNotFound;
(function (NameNotFound) {
    NameNotFound.Parameter = NameNotFoundParameter;
    NameNotFound.Object = NameNotFoundObject;
})(NameNotFound || (NameNotFound = {}));
export function NameNotFoundParameter(valid, value, subject = 'type', conversion = value => typeof value) {
    let sentence = new Sentences(valid);
    sentence.accept = ['have'];
    sentence.reject = ['does not have'];
    sentence.subject.push(subject);
    sentence.expect.push('prototype name');
    if (!valid) {
        sentence.subject.push(conversion(value));
    }
    return sentence.message;
}
export function NameNotFoundObject({ valid, value, subject = 'type', conversion = value => typeof value, }) {
    return NameNotFoundParameter(valid, value, subject, conversion);
}
//# sourceMappingURL=name-not-found.js.map