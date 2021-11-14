import MapPartialParameter from "./map-partial-parameter";
import MapPartialParameters from "./map-partial-parameters";
var MapPartial;
(function (MapPartial) {
    MapPartial.Parameter = MapPartialParameter;
    MapPartial.Parameters = MapPartialParameters;
})(MapPartial || (MapPartial = {}));
export default MapPartial;
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
//
// export function MapPartialObject<
//     Validators extends Record<PropertyKey, Validator>
// >(
//     // values : RecordParameter<Validators>,
//     // validators : Validators,
//     {
//         value,
//         validators,
//         stop = false,
//     } : Value<RecordParameter<Validators>> & ValidatorsContainer<Validators> & {stop ?: boolean}
// ) : Partial<InferReturn<Validators>> {
//
//     return MapPartialParameter(value, validators, stop);
// }
//# sourceMappingURL=map-partial.js.map