export default function NameNotFoundParameters(valid, value, subject = 'type', conversion = value => typeof value) {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('have');
    }
    else {
        strings.push('does not have');
    }
    strings.push('prototype name');
    if (!valid) {
        strings.push(conversion(value));
    }
    return strings.join(' ') + '.';
}
//# sourceMappingURL=name-not-found-parameters.js.map