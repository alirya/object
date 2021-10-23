import Validator from "@dikac/t-validator/validator";
import MapInterface from "../../../map";
import Return from "@dikac/t-validator/validatable/infer-unambiguous";
import Value from "@dikac/t-value/value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
export default function RecordKeyz<RecordType extends Record<PropertyKey, any>, ValidatorType extends Validator<keyof RecordType>>({ value, validator }: Value<RecordType> & ValidatorContainer<ValidatorType>): MapInterface<RecordType, Return<ValidatorType>>;
