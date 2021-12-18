import Name from "../../string/name";

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
) : string {

    const strings : string[] = [];

    strings.push(subject);
    strings.push(Name(value));

    if(valid) {

        strings.push('is not');

    } else {

        strings.push('must not');
    }

    strings.push('empty object')

    return (strings.join(' ') + '.').trim();
}
