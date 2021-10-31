import Sentences from "@dikac/t-string/message/sentences";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

export default NameNotFound;
namespace NameNotFound {

    export const Parameter = NameNotFoundParameter;

    export const Object = NameNotFoundObject;

    export type Argument = NameNotFoundArgument;
}


export function NameNotFoundParameter(
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

export type NameNotFoundArgument = Validatable & Value & {
    subject ?: string;
    conversion ?: (value:unknown)=>string;
};

export function NameNotFoundObject(
    {
        valid,
        value,
        subject = 'type',
        conversion = value=>typeof value,
    } : NameNotFoundArgument
) : string {

    return NameNotFoundParameter(valid, value, subject, conversion);
}
