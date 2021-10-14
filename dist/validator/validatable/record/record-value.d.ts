import Validator from "@dikac/t-validator/validator";
import MapInterface from "../../../map";
import { O } from "ts-toolbelt";
import Return from "@dikac/t-validator/validatable/infer-unambiguous";
export default function RecordValue<RecordType extends Record<PropertyKey, any>, Value extends Validator<O.UnionOf<RecordType>>>(object: RecordType, value: Value): MapInterface<RecordType, Return<Value>>;
