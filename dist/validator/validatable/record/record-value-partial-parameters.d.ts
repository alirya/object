import Validator from "@dikac/t-validator/validator";
import MapInterface from "../../../map";
import { O } from "ts-toolbelt";
import InferStatic from "@dikac/t-validator/validatable/infer-static";
export default function RecordValuePartialParameters<RecordType extends Record<PropertyKey, any>, ValidatorType extends Validator<O.UnionOf<RecordType>>>(value: RecordType, validator: ValidatorType, stop?: boolean): Partial<MapInterface<RecordType, InferStatic<ValidatorType>>>;
