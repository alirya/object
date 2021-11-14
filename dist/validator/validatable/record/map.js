import MapParameters from "./map-parameters";
import MapParameter from "./map-parameter";
var Map;
(function (Map) {
    Map.Parameters = MapParameters;
    Map.Parameter = MapParameter;
})(Map || (Map = {}));
export default Map;
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
//
// export function MapObject<
//     Validators extends Record<PropertyKey, Validator>
// >(
//     //values : RecordParameter<Validators>,
//     //validators : Validators,
//     {
//         value,
//         validators
//     } : Value<RecordParameter<Validators>> & ValidatorsContainer<Validators>
// ) : InferReturn<Validators> {
//
//     return MapParameter(value, validators);
// }
//# sourceMappingURL=map.js.map