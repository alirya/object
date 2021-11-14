import IteratorMap from "../iterator/map";
//
// export default Map;
// namespace Map {
//     export const Parameter = MapParameter;
//     export const Object = MapObject;
// }
export default function MapParameters(value, validators) {
    let object = {};
    for (let [property, validatable] of IteratorMap.Parameters(value, validators)) {
        object[property] = validatable;
    }
    return object;
}
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
//# sourceMappingURL=map-parameters.js.map