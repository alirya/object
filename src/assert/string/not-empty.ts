import Name from "../../string/name";
import SentencesMust from "@dikac/t-string/message/sentences-must";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

export default NotEmpty;
namespace NotEmpty {

    export const Parameter = NotEmptyParameter;
    export const Object = NotEmptyObject;
    export type Argument = NotEmptyArgument;
}


/**
 * string intended for not NotEmpty object
 *
 * @param valid
 * @param value
 * @param subject
 */

export function NotEmptyParameter(
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

    const sentence = SentencesMust(valid);

    sentence.accept = ['is not'];
    sentence.reject = ['must not'];

    sentence.subject.push(subject);
    sentence.subject.push(Name(value));

    sentence.expect = ['NotEmpty object'];

    return sentence.message;
}


export type NotEmptyArgument = Validatable & Value<object> & {subject?: string};

export function NotEmptyObject(
    //valid : boolean,
    //value : object,
    //subject : string = '',
    {
        valid,
        value,
        subject = '',

    } : NotEmptyArgument
) : string {

    return NotEmptyParameter(valid, value, subject)
}
