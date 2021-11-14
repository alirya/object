import Validator from "@dikac/t-validator/validator";
import MapInterface from "../../../map";
import {O} from "ts-toolbelt";
import InferStatic from "@dikac/t-validator/validatable/infer-static";
import Value from "@dikac/t-value/value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import RecordValuePartialParameters from "./record-value-partial-parameters";
//
// export default RecordValuePartial;
// namespace RecordValuePartial {
//
//     export const Parameter = RecordValuePartialParameter;
//     export const Object = RecordValuePartialObject;
// }
//
// export function RecordValuePartialParameter<
//     RecordType extends Record<PropertyKey, any>,
//     ValidatorType extends Validator<O.UnionOf<RecordType>>,
// >(
//      value : RecordType,
//      validator : ValidatorType,
//      stop = false,
//     // {
//     //     value,
//     //     validator,
//     //     stop = false,
//     // } : Value<RecordType> & ValidatorContainer<ValidatorType> & {stop ?: boolean}
// ) : Partial<MapInterface<RecordType, Return<ValidatorType>>> {
//
//     let result = {};
//
//     for(const [key, validatable] of IteratorRecordValue.Parameter(value, validator)) {
//
//         result[key as PropertyKey] = validatable;
//
//         if(validatable.valid === stop) {
//
//             return result;
//         }
//     }
//
//     return result;
// }

export default function RecordValuePartialParameter<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<O.UnionOf<RecordType>>,
>(
    // value : RecordType,
    // validator : ValidatorType,
    {
        value,
        validator,
        stop,
    } : Value<RecordType> & ValidatorContainer<ValidatorType> & {stop ?: boolean}
) : Partial<MapInterface<RecordType, InferStatic<ValidatorType>>> {

    return RecordValuePartialParameters(value, validator, stop);
}
