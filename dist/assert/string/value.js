import ValueParameter from "./value-parameter";
import ValueParameters from "./value-parameters";
var Value;
(function (Value) {
    Value.Parameter = ValueParameter;
    Value.Parameters = ValueParameters;
})(Value || (Value = {}));
export default Value;
//
// /**
//  * {@param valid} type is valid or not
//  * {@param property} object property
//  * {@param type} expected type
//  */
// export function ValueParameter(
//     property : PropertyKey,
//     valid : boolean,
//     type : string,
//     // {
//     //     valid,
//     //     property,
//     //     type,
//     // } : Validatable & Property & {type : string}
// ) : string {
//
//     const sentence = new Sentence(valid);
//
//     sentence.reject = 'value is not';
//     sentence.accept = 'value is';
//
//
//     sentence.subject = property.toString();
//     sentence.expect = type;
//
//     return sentence.message;
// }
//
// export type ValueArgument = Validatable & Property & {type : string};
//
// export function ValueObject(
//     // valid : boolean,
//     // property : PropertyKey,
//     // type : string,
//     {
//         valid,
//         property,
//         type,
//     } : ValueArgument
// ) : string {
//
//     return ValueParameter(property, valid, type);
// }
//# sourceMappingURL=value.js.map