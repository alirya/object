import MapPartialParameters from "./map-partial-parameters";
//
// export default MapPartial;
// namespace MapPartial {
//     export const Parameter = MapPartialParameter;
//     export const Object = MapPartialObject;
// }
//
// export function MapPartialParameter<
//     Validators extends Record<PropertyKey, Validator>
// >(
//     value : RecordParameter<Validators>,
//     validators : Validators,
//     stop = false,
//     // {
//     //     value,
//     //     validators,
//     //     stop = false,
//     // } : Value<RecordParameter<Validators>> & ValidatorsContainer<Validators> & {stop ?: boolean}
// ) : Partial<InferReturn<Validators>> {
//
//     let object = {};
//
//     for(let [property, validatable] of IteratorMap.Parameter(value, validators)) {
//
//         object[<PropertyKey>property] = validatable;
//
//         if(validatable.valid === stop) {
//
//             return object;
//         }
//     }
//
//     return object;
//
//     // for(let property in validators) {
//     //
//     //     const validator = validators[property];
//     //     const value = values[property];
//     //
//     //     object[<PropertyKey>property] = validator(value);
//     //
//     //     if(!object[<PropertyKey>property].valid) {
//     //
//     //         return object;
//     //     }
//     // }
//     //
//     // return <InferReturn<Validators>> object;
// }
export default function MapPartialParameter(
// values : RecordParameter<Validators>,
// validators : Validators,
{ value, validators, stop = false, }) {
    return MapPartialParameters(value, validators, stop);
}
//# sourceMappingURL=map-partial-parameter.js.map