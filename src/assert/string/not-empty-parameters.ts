import Name from "../../string/name";

// export default NotEmpty;
// namespace NotEmpty {
//
//     export const Parameter = NotEmptyParameter;
//     export const Object = NotEmptyObject;
//     export type Argument = NotEmptyArgument;
// }
//

/**
 * string intended for not NotEmpty object
 *
 * @param valid
 * @param value
 * @param subject
 */

export default function NotEmptyParameters(
    value : object,
    valid : boolean,
    subject : string = ''
    //{
    //    valid,
    //    value,
    //    subject = '',
//
    //} : Validatable & Value<object> & {subject?: string}
) : string {

    const strings : string[] = [];

    strings.push(subject);
    strings.push(Name(value));

    if(valid) {

        strings.push('is not');

    } else {

        strings.push('must not');
    }

    strings.push('not empty object')

    return strings.join(' ') + '.';
}

//
// export type NotEmptyArgument = Validatable & Value<object> & {subject?: string};
//
// export function NotEmptyObject(
//     //valid : boolean,
//     //value : object,
//     //subject : string = '',
//     {
//         valid,
//         value,
//         subject = '',
//
//     } : NotEmptyArgument
// ) : string {
//
//     return NotEmptyParameter(valid, value, subject)
// }
