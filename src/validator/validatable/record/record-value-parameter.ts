import Validator from "@dikac/t-validator/validator";
import MapInterface from "../../../map";
import {O} from "ts-toolbelt";
import InferStatic from "@dikac/t-validator/validatable/infer-static";
import Value from "@dikac/t-value/value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import RecordValueParameters from "./record-value-parameters";

export default function RecordValueParameter<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<O.UnionOf<RecordType>>,
>(
    {
        value,
        validator,
    } : Value<RecordType> & ValidatorContainer<ValidatorType>
) : MapInterface<RecordType, InferStatic<ValidatorType>> {

    return RecordValueParameters(value, validator);
}
