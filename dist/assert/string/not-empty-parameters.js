import Name from "../../string/name";
/**
 * string intended for not NotEmpty object
 *
 * @param valid
 * @param value
 * @param subject
 */
export default function NotEmptyParameters(value, valid, subject = '') {
    const strings = [];
    strings.push(subject);
    strings.push(Name(value));
    if (valid) {
        strings.push('is not');
    }
    else {
        strings.push('must not');
    }
    strings.push('not empty object');
    return strings.join(' ') + '.';
}
//# sourceMappingURL=not-empty-parameters.js.map