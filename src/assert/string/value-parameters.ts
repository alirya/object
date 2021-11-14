/**
 * {@param valid} type is valid or not
 * {@param property} object property
 * {@param type} expected type
 */
export default function ValueParameters(
    property : PropertyKey,
    valid : boolean,
    type : string,
    // {
    //     valid,
    //     property,
    //     type,
    // } : Validatable & Property & {type : string}
) : string {

    const strings : string[] = [];

    strings.push(property.toString());

    if(valid) {

        strings.push('value is');

    } else {

        strings.push('value is not');
    }

    strings.push(type);

    return strings.join(' ') + '.';
}
