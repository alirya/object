export default Compatible;
var Compatible;
(function (Compatible) {
    Compatible.Parameter = CompatibleParameter;
    Compatible.Object = CompatibleObject;
})(Compatible || (Compatible = {}));
export function CompatibleParameter(value, valid, expect, subject = 'type', conversion = value => typeof value) {
    const messages = [];
    messages.push(subject);
    if (valid) {
        messages.push('is');
    }
    else {
        messages.push('must');
    }
    messages.push('compatible with', expect);
    if (!valid) {
        messages.push(',actual', conversion(value));
    }
    // let sentence = SentencesMust(valid);
    // sentence.expect = ['compatible with', expect];
    // sentence.subject.push(subject);
    //
    // sentence.comma.push('expect');
    //
    //
    // if(!valid) {
    //
    //     sentence.actual.push('actual', conversion(value));
    // }
    return messages.join(' ') + '.';
}
export function CompatibleObject(
//valid : boolean,
//value : unknown,
//expect : string,
//subject : string = 'type',
//conversion : (value:unknown)=>string = value=>typeof value,
{ valid, value, expect, subject = 'type', conversion = value => typeof value, }) {
    return CompatibleParameter(value, valid, expect, subject, conversion);
}
//# sourceMappingURL=compatible.js.map