import Validator from '@alirya/validator/validator';
import MapInterface from '../../../map';
import Return from '@alirya/validator/validatable/infer-static';
import IteratorRecordKey from '../iterator/record-key';
import Value from '@alirya/value/value';
import ValidatorContainer from '@alirya/validator/validator/validator';

export function RecordKeyPartialParameters<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<keyof RecordType>,
>(
    value : RecordType,
    validator : ValidatorType,
    stop = false,
) : Partial<MapInterface<RecordType, Return<ValidatorType>>> {

    let result = {};

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
