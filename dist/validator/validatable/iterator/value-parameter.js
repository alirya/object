//
// export default Value;
// namespace Value {
//
//     export const Parameter = ValueParameter;
//     export const Object = ValueObject;
//     export type Argument<
//         ValueType,
//         Validators extends Record<PropertyKey, Validator<ValueType>>,
//     > = ValueArgument<
//         ValueType,
//         Validators
//     >;
// }
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
// export type ValueArgument<
//     ValueType,
//     Validators extends Record<PropertyKey, Validator<ValueType>>,
//     >
//     = ValidatorsContainer<Validators> & Value<ValueType>
export default function* ValueParameter(
//value : ValueType,
//validators : Validators,
{ value, validators }) {
    let object = {};
    for (let property in validators) {
        const validator = validators[property];
        yield [
            object[property],
            validator(value)
        ];
    }
}
//# sourceMappingURL=value-parameter.js.map