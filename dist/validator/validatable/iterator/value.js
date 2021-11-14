import ValueParameters from "./value-parameters";
import ValueParameter from "./value-parameter";
var Value;
(function (Value) {
    Value.Parameters = ValueParameters;
    Value.Parameter = ValueParameter;
    // export type Argument<
    //     ValueType,
    //     Validators extends Record<PropertyKey, Validator<ValueType>>,
    // > = ValueArgument<
    //     ValueType,
    //     Validators
    // >;
})(Value || (Value = {}));
export default Value;
//
// export function * ValueParameter<
//     ValueType,
//     Validators extends Record<PropertyKey, Validator<ValueType>>,
// >(
//     value : ValueType,
//     validators : Validators,
//     // {
//     //     value,
//     //     validators
//     // } : ValidatorsContainer<Validators> & Value<ValueType>
// ) : Iterable<[keyof Validators, InferReturn<Validators[keyof Validators]>]> {
//
//     let object  = {};
//
//     for(let property in validators) {
//
//         const validator = validators[property];
//
//         yield [
//             object[<PropertyKey>property],
//             validator(value) as InferReturn<Validators[keyof Validators]>
//         ];
//     }
// }
//
// export type ValueArgument<
//     ValueType,
//     Validators extends Record<PropertyKey, Validator<ValueType>>,
//     >
//     = ValidatorsContainer<Validators> & Value<ValueType>
//
// export function * ValueObject<
//     ValueType,
//     Validators extends Record<PropertyKey, Validator<ValueType>>,
// >(
//     //value : ValueType,
//     //validators : Validators,
//     {
//         value,
//         validators
//     } : ValidatorsContainer<Validators> & Value<ValueType>
// ) : Iterable<[keyof Validators, InferReturn<Validators[keyof Validators]>]> {
//
//     let object  = {};
//
//     for(let property in validators) {
//
//         const validator = validators[property];
//
//         yield [
//             object[<PropertyKey>property],
//             validator(value) as InferReturn<Validators[keyof Validators]>
//         ];
//     }
// }
//# sourceMappingURL=value.js.map