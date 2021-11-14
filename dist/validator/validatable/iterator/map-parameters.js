// export default Map;
// namespace Map {
//
//     export const Parameter = MapParameter;
//     export const Object = MapObject;
//     export type Argument<
//         Validators extends Record<PropertyKey, Validator>
//         > = MapArgument<Validators>;
// }
export default function* MapParameters(value, validators) {
    for (let property in validators) {
        const validator = validators[property];
        const val = value[property];
        yield [property, validator(val)];
    }
}
//
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
//# sourceMappingURL=map-parameters.js.map