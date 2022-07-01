import Validator from '@alirya/validator/validator';
import MapInterface from '../../../map';
import Return from '@alirya/validator/validatable/infer-static';
import IteratorRecordKey from '../iterator/record-key';
import Value from '@alirya/value/value';
import ValidatorContainer from '@alirya/validator/validator/validator';

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
