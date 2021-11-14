import CompatibleParameter, {CompatibleArgument} from "./compatible-parameter";
import CompatibleParameters from "./compatible-parameters";


namespace Compatible {

    export const Parameter = CompatibleParameter;
    export const Parameters = CompatibleParameters;
    export type Argument = CompatibleArgument;
}

export default Compatible;
//
// export function CompatibleParameter(
//    value : unknown,
//    valid : boolean,
//    expect : string,
//    subject : string = 'type',
//    conversion : (value:unknown)=>string = value=>typeof value,
// ) : string {
//
//     const messages : string[] = [];
//     messages.push(subject);
//
//     if(valid) {
//
//         messages.push('is');
//
//     } else {
//
//        messages.push('must');
//     }
//
//     messages.push('compatible with', expect);
//
//     if(!valid) {
//
//         messages.push(',actual', conversion(value));
//     }
//
//
//     // let sentence = SentencesMust(valid);
//     // sentence.expect = ['compatible with', expect];
//     // sentence.subject.push(subject);
//     //
//     // sentence.comma.push('expect');
//     //
//     //
//     // if(!valid) {
//     //
//     //     sentence.actual.push('actual', conversion(value));
//     // }
//
//     return messages.join(' ') + '.';
// }
//
// export type CompatibleArgument = Validatable &
//     Value &
//     {   expect : string;
//         subject?: string;
//         conversion:(value:unknown)=>string
//     };
//
// export function CompatibleObject(
//    //valid : boolean,
//    //value : unknown,
//    //expect : string,
//    //subject : string = 'type',
//    //conversion : (value:unknown)=>string = value=>typeof value,
//     {
//         valid,
//         value,
//         expect,
//         subject = 'type',
//         conversion = value=>typeof value,
//     } : CompatibleArgument
// ) : string {
//
//     return CompatibleParameter(value, valid, expect, subject, conversion);
// }
