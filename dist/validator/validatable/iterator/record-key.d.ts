import Validator from "@dikac/t-validator/validator";
import Return from "@dikac/t-validator/validatable/infer-unambiguous";
import Value from "@dikac/t-value/value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
export default RecordKey;
declare namespace RecordKey {
    const Parameter: typeof RecordKeyParameter;
    const Object: typeof RecordKeyObject;
    type Argument<RecordType extends Record<PropertyKey, any>, ValidatorType extends Validator<keyof RecordType>> = RecordKeyArgument<RecordType, ValidatorType>;
}
export declare function RecordKeyParameter<RecordType extends Record<PropertyKey, any>, ValidatorType extends Validator<keyof RecordType>>(value: RecordType, validator: ValidatorType): Iterable<[keyof RecordType, Return<ValidatorType>]>;
export declare type RecordKeyArgument<RecordType extends Record<PropertyKey, any>, ValidatorType extends Validator<keyof RecordType>> = Value<RecordType> & ValidatorContainer<ValidatorType>;
export declare function RecordKeyObject<RecordType extends Record<PropertyKey, any>, ValidatorType extends Validator<keyof RecordType>>({ value, validator }: Value<RecordType> & ValidatorContainer<ValidatorType>): Iterable<[keyof RecordType, Return<ValidatorType>]>;
