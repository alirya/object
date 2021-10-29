import Validator from "@dikac/t-validator/validator";
import MapInterface from "../../../map";
import { O } from "ts-toolbelt";
import Return from "@dikac/t-validator/validatable/infer-unambiguous";
import Value from "@dikac/t-value/value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
export default RecordValue;
declare namespace RecordValue {
    const Parameter: typeof RecordValueParameter;
    const Object: typeof RecordValueObject;
}
export declare function RecordValueParameter<RecordType extends Record<PropertyKey, any>, ValidatorType extends Validator<O.UnionOf<RecordType>>>(value: RecordType, validator: ValidatorType): MapInterface<RecordType, Return<ValidatorType>>;
export declare function RecordValueObject<RecordType extends Record<PropertyKey, any>, ValidatorType extends Validator<O.UnionOf<RecordType>>>({ value, validator, }: Value<RecordType> & ValidatorContainer<ValidatorType>): MapInterface<RecordType, Return<ValidatorType>>;
