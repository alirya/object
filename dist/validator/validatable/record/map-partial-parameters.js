import IteratorMap from "../iterator/map";
// export default MapPartial;
// namespace MapPartial {
//     export const Parameter = MapPartialParameter;
//     export const Object = MapPartialObject;
// }
export default function MapPartialParameters(value, validators, stop = false) {
    let object = {};
    for (let [property, validatable] of IteratorMap.Parameters(value, validators)) {
        object[property] = validatable;
        if (validatable.valid === stop) {
            return object;
        }
    }
    return object;
    // for(let property in validators) {
    //
    //     const validator = validators[property];
    //     const value = values[property];
    //
    //     object[<PropertyKey>property] = validator(value);
    //
    //     if(!object[<PropertyKey>property].valid) {
    //
    //         return object;
    //     }
    // }
    //
    // return <InferReturn<Validators>> object;
}
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
//# sourceMappingURL=map-partial-parameters.js.map