export default function CompatibleParameters(
   value : unknown,
   valid : boolean,
   expect : string,
   subject : string = 'type',
   conversion : (value:unknown)=>string = value=>typeof value,
) : string {

    const messages : string[] = [];
    messages.push(subject);

    if(valid) {

        messages.push('is');

    } else {

       messages.push('must');
    }

    messages.push('compatible with', expect);

    if(!valid) {

        messages[3] = `${messages[3]},`;

        messages.push('actual', conversion(value));
    }

    return messages.join(' ') + '.';
}
