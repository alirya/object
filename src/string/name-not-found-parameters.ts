
export default function NameNotFoundParameters(
    valid : boolean,
    value : unknown,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value,
    //{
    //    valid,
    //    value,
    //    subject = 'type',
    //    conversion = value=>typeof value,
    //} : Validatable & Value & {
    //    subject ?: string;
    //    conversion ?: (value:unknown)=>string;
    //}
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('have');

    } else {

        strings.push('does not have');
    }

    strings.push('prototype name');

    if(!valid) {

        strings.push(conversion(value));
    }

    return strings.join(' ') + '.';
}
