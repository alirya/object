import SentencesMust from "@dikac/t-string/message/sentences-must";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";


export default Object_;
namespace Object_ {

    export const Parameter = ObjectParameter;
    export const Object = ObjectObject;
    export type Argument = ObjectArgument;
}


export function ObjectParameter(
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

    let sentence = SentencesMust(valid);
    sentence.expect.push('object');
    sentence.subject.push(subject);

    sentence.comma.push('expect');

    if(!valid) {

        sentence.actual.push('actual', conversion(value));
    }

    return sentence.message;
}

export type ObjectArgument = Validatable & Value & {subject?: string} & {conversion?:(value:unknown)=>string};

export function ObjectObject(
    //valid : boolean,
    //value : unknown,
    //subject : string = 'type',
    //conversion : (value:unknown)=>string = value=>typeof value,
    {
        valid,
        value,
        subject = 'type',
        conversion = value=>typeof value,
    } : ObjectArgument
) : string {

    return ObjectParameter(value, valid, subject, conversion);
}
