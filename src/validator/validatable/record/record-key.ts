import Validator from '@axiona/validator/validator.js';
import MapInterface from '../../../map.js';
import Return from '@axiona/validator/validatable/infer-static.js';
import IteratorRecordKey from '../iterator/record-key.js';
import Value from '@axiona/value/value.js';
import ValidatorContainer from '@axiona/validator/validator/validator.js';

export function RecordKeyParameters<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<keyof RecordType>,
>(
    value : RecordType,
    validator : ValidatorType
) : MapInterface<RecordType, Return<ValidatorType>>  {

    const result = {};

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
