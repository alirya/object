import Sentences from "@dikac/t-string/message/sentences";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

export default function NameNotFound(
    // valid : boolean,
    // value : unknown,
    // subject : string = 'type',
    // conversion : (value:unknown)=>string = value=>typeof value,
    {
        valid,
        value,
        subject = 'type',
        conversion = value=>typeof value,
    } : Validatable & Value & {
        subject ?: string;
        conversion ?: (value:unknown)=>string;
    }
) : string {

    let sentence = new Sentences(valid);
    sentence.accept = ['have'];
    sentence.reject = ['does not have'];
    sentence.subject.push(subject);

    sentence.expect.push('prototype name');

    if(!valid) {

        sentence.subject.push(conversion(value));
    }

    return sentence.message;
}
