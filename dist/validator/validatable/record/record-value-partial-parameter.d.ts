import Validator from "@dikac/t-validator/validator";
import MapInterface from "../../../map";
import { O } from "ts-toolbelt";
import InferStatic from "@dikac/t-validator/validatable/infer-static";
import Value from "@dikac/t-value/value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
export default function RecordValuePartialParameter<RecordType extends Record<PropertyKey, any>, ValidatorType extends Validator<O.UnionOf<RecordType>>>({ value, validator, stop, }: Value<RecordType> & ValidatorContainer<ValidatorType> & {
    stop?: boolean;
}): Partial<MapInterface<RecordType, InferStatic<ValidatorType>>>;
