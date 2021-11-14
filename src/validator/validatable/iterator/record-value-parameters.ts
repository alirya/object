import Validator from "@dikac/t-validator/validator";
import {O} from "ts-toolbelt";
import Return from "@dikac/t-validator/validatable/infer-static";

// export default RecordValue;
// namespace RecordValue {
//
//     export const Parameter = RecordValueParameter;
//     export const Object = RecordValueObject;
//     export type Argument<
//         RecordType extends Record<PropertyKey, any>,
//         ValidatorType extends Validator<O.UnionOf<RecordType>>
//     > = RecordValueArgument<
//         RecordType,
//         ValidatorType
//     >;
// }

export default function * RecordValueParameters<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<O.UnionOf<RecordType>>,
>(
    value : RecordType,
    validator : ValidatorType,
    // {
    //     value,
    //     validator,
    // } : Value<RecordType> & ValidatorContainer<ValidatorType>
// ) : MapInterface<RecordType, Return<ValidatorType>> {
) : Iterable<[keyof RecordType, Return<ValidatorType>]> {

    let result = {};

    for(const key in value) {

        yield [result[key as PropertyKey], validator(value[key]) as Return<ValidatorType>];
    }

}

// export type RecordValueArgument<
//     RecordType extends Record<PropertyKey, any>,
//     ValidatorType extends Validator<O.UnionOf<RecordType>>
// > =
//     Value<RecordType> & ValidatorContainer<ValidatorType>
//
// export function * RecordValueObject<
//     RecordType extends Record<PropertyKey, any>,
//     ValidatorType extends Validator<O.UnionOf<RecordType>>,
// >(
// //    value : RecordType,
// //    validator : ValidatorType,
//     {
//         value,
//         validator,
//     } : Value<RecordType> & ValidatorContainer<ValidatorType>
// // ) : MapInterface<RecordType, Return<ValidatorType>> {
// ) : Iterable<[keyof RecordType, Return<ValidatorType>]> {
//
//     return RecordValueParameter(value, validator);
//
// }
