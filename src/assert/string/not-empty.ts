import Name from "../../string/name";
import SentencesMust from "@dikac/t-string/message/sentences-must";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

/**
 * string intended for not empty object
 *
 * @param valid
 * @param value
 * @param subject
 */

export default function NotEmpty(
    //valid : boolean,
    //value : object,
    //subject : string = ''
    {
        valid,
        value,
        subject = '',

    } : Validatable & Value & {subject?: string}
) : string {

    const sentence = SentencesMust(valid);

    sentence.accept = ['is not'];
    sentence.reject = ['must not'];

    sentence.subject.push(subject);
    sentence.subject.push(Name(value));

    sentence.expect = ['empty object'];

    return sentence.message;
}
