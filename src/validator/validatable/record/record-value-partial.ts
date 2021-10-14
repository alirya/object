import Validator from "@dikac/t-validator/validator";
import MapInterface from "../../../map";
import InferType from "@dikac/t-validator/type/infer";
import {O} from "ts-toolbelt";
import Return from "@dikac/t-validator/validatable/infer-unambiguous";

export default function RecordValue<
    RecordType extends Record<PropertyKey, any>,
    Value extends Validator<O.UnionOf<RecordType>>,
>(
    object : RecordType,
    value : Value,
) : Partial<MapInterface<RecordType, Return<Value>>>  {

    let result = {};

    for(const [k, v] of Object.entries(object)) {

        const pair = value(<InferType<Value>>v);

        result[k] = pair

        if(!pair.valid) {

            return result;
        }
    }

    return  result;
}
