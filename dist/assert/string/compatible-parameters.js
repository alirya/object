export default function CompatibleParameters(value, valid, expect, subject = 'type', conversion = value => typeof value) {
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
    return messages.join(' ') + '.';
}
//# sourceMappingURL=compatible-parameters.js.map