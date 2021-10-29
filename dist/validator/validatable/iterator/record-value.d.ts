import Validator from "@dikac/t-validator/validator";
import { O } from "ts-toolbelt";
import Return from "@dikac/t-validator/validatable/infer-unambiguous";
import Value from "@dikac/t-value/value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
export default RecordValue;
declare namespace RecordValue {
    const Parameter: typeof RecordValueParameter;
    const Object: typeof RecordValueObject;
    type Argument<RecordType extends Record<PropertyKey, any>, ValidatorType extends Validator<O.UnionOf<RecordType>>> = RecordValueArgument<RecordType, ValidatorType>;
}
export declare function RecordValueParameter<RecordType extends Record<PropertyKey, any>, ValidatorType extends Validator<O.UnionOf<RecordType>>>(value: RecordType, validator: ValidatorType): Iterable<[keyof RecordType, Return<ValidatorType>]>;
export declare type RecordValueArgument<RecordType extends Record<PropertyKey, any>, ValidatorType extends Validator<O.UnionOf<RecordType>>> = Value<RecordType> & ValidatorContainer<ValidatorType>;
export declare function RecordValueObject<RecordType extends Record<PropertyKey, any>, ValidatorType extends Validator<O.UnionOf<RecordType>>>({ value, validator, }: Value<RecordType> & ValidatorContainer<ValidatorType>): Iterable<[keyof RecordType, Return<ValidatorType>]>;
