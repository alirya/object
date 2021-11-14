
export default function ObjectParameters(
    value : unknown,
    valid : boolean,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value,
    // {
    //     valid,
    //     value,
    //     subject = 'type',
    //     conversion = value=>typeof value,
    // } : Validatable & Value & {subject?: string} & {conversion?:(value:unknown)=>string}
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('object')

    if(!valid) {

        strings.push('actual', conversion(value));
    }

    return strings.join(' ') + '.';
}
