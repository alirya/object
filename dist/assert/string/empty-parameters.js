import Name from "../../string/name";
/**
 * string intended for empty object
 *
 * @param valid
 * @param value
 * @param subject
 */
export default function EmptyParameters(value, valid, subject = '') {
    const strings = [];
    strings.push(subject);
    strings.push(`"${Name(value)}"`);
    if (valid) {
        strings.push('is');
    }
    else {
        strings.push('must');
    }
    strings.push('empty object');
    return strings.join(' ') + '.';
}
//# sourceMappingURL=empty-parameters.js.map