import Validator from "@dikac/t-validator/validator";
import { O } from "ts-toolbelt";
import Return from "@dikac/t-validator/validatable/infer-static";
import Value from "@dikac/t-value/value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
export declare function RecordValueParameter<RecordType extends Record<PropertyKey, any>, ValidatorType extends Validator<O.UnionOf<RecordType>>>({ value, validator, }: Value<RecordType> & ValidatorContainer<ValidatorType>): Iterable<[keyof RecordType, Return<ValidatorType>]>;
