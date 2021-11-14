import Value from "@dikac/t-value/value";
import ValueParameters from "./value-parameters";
import ValueParameter from "./value-parameter";

namespace Value {

    export const Parameters = ValueParameters;
    export const Parameter = ValueParameter;
}
export default Value;
//
// export function ValueParameter<
//     ValueType,
//     Validators extends Record<PropertyKey, Validator<ValueType>>,
// >(
//     value : ValueType,
//     validators : Validators
// ) : ValidatableRecord<Validators> {
//
//     let object  = {};
//
//     for(const [key, validatable] of IteratorValue.Parameter(value, validators)) {
//
//         object[<PropertyKey>key] = validatable;
//     }
//
//     return <ValidatableRecord<Validators>> object;
// }
//
// export function ValueObject<
//     ValueType,
//     Validators extends Record<PropertyKey, Validator<ValueType>>,
// >(
//     {
//         value,
//         validators
//     } : ValidatorsContainer<Validators> & Value<ValueType>
// ) : ValidatableRecord<Validators> {
//
//     return ValueParameter(value, validators);
// }
