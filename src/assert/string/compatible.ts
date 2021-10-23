import SentencesMust from "@dikac/t-string/message/sentences-must";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

export default function Compatible(
   //valid : boolean,
   //value : unknown,
   //expect : string,
   //subject : string = 'type',
   //conversion : (value:unknown)=>string = value=>typeof value,
    {
        valid,
        value,
        expect,
        subject = 'type',
        conversion = value=>typeof value,
    } : Validatable &
        Value &
        {   expect : string;
            subject?: string;
            conversion:(value:unknown)=>string
        }
) : string {

    let sentence = SentencesMust(valid);
    sentence.expect = ['compatible with', expect];
    sentence.subject.push(subject);

    sentence.comma.push('expect');


    if(!valid) {

        sentence.actual.push('actual', conversion(value));
    }

    return sentence.message;
}
