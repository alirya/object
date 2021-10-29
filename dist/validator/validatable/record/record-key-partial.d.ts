import Validator from "@dikac/t-validator/validator";
import MapInterface from "../../../map";
import Return from "@dikac/t-validator/validatable/infer-unambiguous";
import Value from "@dikac/t-value/value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
export default RecordKeyPartial;
declare namespace RecordKeyPartial {
    const Parameter: typeof RecordKeyPartialParameter;
    const Object: typeof RecordKeyPartialObject;
}
export declare function RecordKeyPartialParameter<RecordType extends Record<PropertyKey, any>, ValidatorType extends Validator<keyof RecordType>>(value: RecordType, validator: ValidatorType, stop?: boolean): Partial<MapInterface<RecordType, Return<ValidatorType>>>;
export declare function RecordKeyPartialObject<RecordType extends Record<PropertyKey, any>, ValidatorType extends Validator<keyof RecordType>>({ value, validator, stop, }: Value<RecordType> & ValidatorContainer<ValidatorType> & {
    stop?: boolean;
}): Partial<MapInterface<RecordType, Return<ValidatorType>>>;
