import Validator from "@dikac/t-validator/validator";
import Return from "@dikac/t-validator/validatable/infer-unambiguous";
import Value from "@dikac/t-value/value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
export default function RecordKey<RecordType extends Record<PropertyKey, any>, ValidatorType extends Validator<keyof RecordType>>({ value, validator }: Value<RecordType> & ValidatorContainer<ValidatorType>): Iterable<[keyof RecordType, Return<ValidatorType>]>;
