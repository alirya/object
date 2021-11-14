import MapParameters from "./map-parameters";
import MapParameter from "./map-parameter";

namespace Map {

    export const Parameters = MapParameters;
    export const Parameter = MapParameter;
    // export type Argument<
    //     Validators extends Record<PropertyKey, Validator>
    //     > = MapArgument<Validators>;
}
export default Map;
//
// export function * MapParameter<
//     Validators extends Record<PropertyKey, Validator>
// >(
//     value : RecordParameter<Validators>,
//     validators : Validators,
// ) : Iterable<[keyof Validators, InferReturn<Validators[keyof Validators]>]> {
//
//     for(let property in validators) {
//
//         const validator = validators[property];
//         const val = value[property];
//
//         yield [property, validator(val) as InferReturn<Validators[keyof Validators]>];
//     }
// }
// export type MapArgument<Validators extends Record<PropertyKey, Validator>>
//     = Value<RecordParameter<Validators>> & ValidatorsContainer<Validators>
//
// export function * MapObject<
//     Validators extends Record<PropertyKey, Validator>
// >(
//     //values : RecordParameter<Validators>,
//     //validators : Validators,
//     {
//         value,
//         validators
//     } : Value<RecordParameter<Validators>> & ValidatorsContainer<Validators>
// ) : Iterable<[keyof Validators, InferReturn<Validators[keyof Validators]>]> {
//
//     return MapParameter(value, validators);
// }
