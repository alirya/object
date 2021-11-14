import MapParameters from "./map-parameters";
//
// export default Map;
// namespace Map {
//     export const Parameter = MapParameter;
//     export const Object = MapObject;
// }
//
// export function MapParameter<
//     Validators extends Record<PropertyKey, Validator>
// >(
//     value : RecordParameter<Validators>,
//     validators : Validators,
//     // {
//     //     value,
//     //     validators
//     // } : Value<RecordParameter<Validators>> & ValidatorsContainer<Validators>
// ) : InferReturn<Validators> {
//
//     let object = {};
//
//     for(let [property, validatable] of IteratorMap.Parameter(value, validators)) {
//
//         object[<PropertyKey>property] = validatable;
//     }
//
//     return <InferReturn<Validators>> object;
// }
export default function MapParameter(
//values : RecordParameter<Validators>,
//validators : Validators,
{ value, validators }) {
    return MapParameters(value, validators);
}
//# sourceMappingURL=map-parameter.js.map