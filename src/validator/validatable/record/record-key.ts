import Validator from '@alirya/validator/validator.js';
import MapInterface from '../../../map.js';
import Return from '@alirya/validator/validatable/infer-static.js';
import IteratorRecordKey from '../iterator/record-key.js';
import Value from '@alirya/value/value.js';
import ValidatorContainer from '@alirya/validator/validator/validator.js';

export function RecordKeyParameters<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<keyof RecordType>,
>(
    value : RecordType,
    validator : ValidatorType
) : MapInterface<RecordType, Return<ValidatorType>>  {

    let result = {};

    for(const [key, validatable] of IteratorRecordKey.Parameters(value, validator)) {

        result[key as PropertyKey] = validatable;
    }

    return <MapInterface<RecordType, Return<Value>>> result;
}


export function RecordKeyParameter<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<keyof RecordType>,
>(
    {
        value,
        validator
    } : Value<RecordType> & ValidatorContainer<ValidatorType>
) : MapInterface<RecordType, Return<ValidatorType>>  {

    return RecordKeyParameters(value, validator);
}


namespace RecordKey {
    export const Parameters = RecordKeyParameters;
    export const Parameter = RecordKeyParameter;
}
export default RecordKey;
