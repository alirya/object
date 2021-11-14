import ObjectParameter from "./object-parameter";
import ObjectParameters from "./object-parameters";
var Object_;
(function (Object_) {
    Object_.Parameter = ObjectParameter;
    Object_.Parameters = ObjectParameters;
})(Object_ || (Object_ = {}));
export default Object_;
//
// export function ObjectParameter(
//     value : unknown,
//     valid : boolean,
//     subject : string = 'type',
//     conversion : (value:unknown)=>string = value=>typeof value,
//     // {
//     //     valid,
//     //     value,
//     //     subject = 'type',
//     //     conversion = value=>typeof value,
//     // } : Validatable & Value & {subject?: string} & {conversion?:(value:unknown)=>string}
// ) : string {
//
//     let sentence = SentencesMust(valid);
//     sentence.expect.push('object');
//     sentence.subject.push(subject);
//
//     sentence.comma.push('expect');
//
//     if(!valid) {
//
//         sentence.actual.push('actual', conversion(value));
//     }
//
//     return sentence.message;
// }
//
// export type ObjectArgument = Validatable & Value & {subject?: string} & {conversion?:(value:unknown)=>string};
//
// export function ObjectObject(
//     //valid : boolean,
//     //value : unknown,
//     //subject : string = 'type',
//     //conversion : (value:unknown)=>string = value=>typeof value,
//     {
//         valid,
//         value,
//         subject = 'type',
//         conversion = value=>typeof value,
//     } : ObjectArgument
// ) : string {
//
//     return ObjectParameter(value, valid, subject, conversion);
// }
//# sourceMappingURL=object.js.map