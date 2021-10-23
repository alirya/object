import Validator from "@dikac/t-validator/validator";
import MapInterface from "../../../map";
import Return from "@dikac/t-validator/validatable/infer-unambiguous";
import Value from "@dikac/t-value/value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
export default function RecordVKeyPartial<RecordType extends Record<PropertyKey, any>, ValidatorType extends Validator<keyof RecordType>>({ value, validator, stop, }: Value<RecordType> & ValidatorContainer<ValidatorType> & {
    stop?: boolean;
}): Partial<MapInterface<RecordType, Return<ValidatorType>>>;
