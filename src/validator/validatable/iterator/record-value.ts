import Validator from '@alirya/validator/validator.js';
import {O} from 'ts-toolbelt';
import Return from '@alirya/validator/validatable/infer-static.js';
import Value from '@alirya/value/value.js';
import ValidatorContainer from '@alirya/validator/validator/validator.js';

export function * RecordValueParameters<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<O.UnionOf<RecordType>>,
>(
    value : RecordType,
    validator : ValidatorType,
) : Iterable<[keyof RecordType, Return<ValidatorType>]> {

    for(const key in value) {

        yield [key as PropertyKey, validator(value[key]) as Return<ValidatorType>];
    }
}



export function * RecordValueParameter<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<O.UnionOf<RecordType>>,
>(
    {
        value,
        validator,
    } : Value<RecordType> & ValidatorContainer<ValidatorType>
) : Iterable<[keyof RecordType, Return<ValidatorType>]> {

    return RecordValueParameters(value, validator);

}


namespace RecordValue {
    export const Parameters = RecordValueParameters;
    export const Parameter = RecordValueParameter;
}
export default RecordValue;
