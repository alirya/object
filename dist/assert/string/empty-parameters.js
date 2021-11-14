import Name from "../../string/name";
//
// export default Empty;
// namespace Empty {
//
//     export const Parameter = EmptyParameter;
//     export const Object = EmptyObject;
//     export type Argument = EmptyArgument;
// }
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
//
// export type EmptyArgument = Validatable & Value<object> & {subject?: string};
//
// export function EmptyObject(
//     //valid : boolean,
//     //value : object,
//     //subject : string = '',
//     {
//         valid,
//         value,
//         subject = '',
//
//     } : EmptyArgument
// ) : string {
//
//     return EmptyParameter(value, valid, subject)
// }
//# sourceMappingURL=empty-parameters.js.map