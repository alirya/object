/**
 * {@param valid} type is valid or not
 * {@param property} object property
 * {@param type} expected type
 */
export default function ValueParameters(property, valid, type) {
    const strings = [];
    strings.push(property.toString());
    if (valid) {
        strings.push('value is');
    }
    else {
        strings.push('value is not');
    }
    strings.push(type);
    return strings.join(' ') + '.';
}
//# sourceMappingURL=value-parameters.js.map