import RecordParameter from "../../base/record/infer";
import ValidatorsContainer from "../../validators/validators";
import Validator from "@dikac/t-validator/validator";
import Value from "@dikac/t-value/value";
import InferReturn from "@dikac/t-validator/validatable/infer-static";
import MapParameters from "./map-parameters";
//
// export default Map;
// namespace Map {
//
//     export const Parameter = MapParameter;
//     export const Object = MapObject;
//     export type Argument<
//         Validators extends Record<PropertyKey, Validator>
//         > = MapArgument<Validators>;
// }
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

export default function * MapParameter<
    Validators extends Record<PropertyKey, Validator>
>(
    //values : RecordParameter<Validators>,
    //validators : Validators,
    {
        value,
        validators
    } : Value<RecordParameter<Validators>> & ValidatorsContainer<Validators>
) : Iterable<[keyof Validators, InferReturn<Validators[keyof Validators]>]> {

    return MapParameters(value, validators);
}
