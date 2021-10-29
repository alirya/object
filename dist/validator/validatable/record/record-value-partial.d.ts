import Validator from "@dikac/t-validator/validator";
import MapInterface from "../../../map";
import { O } from "ts-toolbelt";
import Return from "@dikac/t-validator/validatable/infer-unambiguous";
import Value from "@dikac/t-value/value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
export default RecordValuePartial;
declare namespace RecordValuePartial {
    const Parameter: typeof RecordValuePartialParameter;
    const Object: typeof RecordValuePartialObject;
}
export declare function RecordValuePartialParameter<RecordType extends Record<PropertyKey, any>, ValidatorType extends Validator<O.UnionOf<RecordType>>>(value: RecordType, validator: ValidatorType, stop?: boolean): Partial<MapInterface<RecordType, Return<ValidatorType>>>;
export declare function RecordValuePartialObject<RecordType extends Record<PropertyKey, any>, ValidatorType extends Validator<O.UnionOf<RecordType>>>({ value, validator, stop, }: Value<RecordType> & ValidatorContainer<ValidatorType> & {
    stop?: boolean;
}): Partial<MapInterface<RecordType, Return<ValidatorType>>>;
