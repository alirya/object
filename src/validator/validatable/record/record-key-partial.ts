import Validator from '@axiona/validator/validator.js';
import MapInterface from '../../../map.js';
import Return from '@axiona/validator/validatable/infer-static.js';
import IteratorRecordKey from '../iterator/record-key.js';
import Value from '@axiona/value/value.js';
import ValidatorContainer from '@axiona/validator/validator/validator.js';

export function RecordKeyPartialParameters<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<keyof RecordType>,
>(
    value : RecordType,
    validator : ValidatorType,
    stop = false,
) : Partial<MapInterface<RecordType, Return<ValidatorType>>> {

    const result = {};

    for(const [key, validatable] of IteratorRecordKey.Parameters(value, validator)) {

        result[key as PropertyKey] = validatable;

        if(validatable.valid === stop) {

            return result;
        }
    }

    return result;
}


export function RecordKeyPartialParameter<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<keyof RecordType>,
>(
    {
        value,
        validator,
        stop = false,
    } : Value<RecordType> & ValidatorContainer<ValidatorType> & {stop ?: boolean}
) : Partial<MapInterface<RecordType, Return<ValidatorType>>> {

    return RecordKeyPartialParameters(value, validator, stop);
}


namespace RecordKeyPartial {
    export const Parameters = RecordKeyPartialParameters;
    export const Parameter = RecordKeyPartialParameter;
}
export default RecordKeyPartial;
