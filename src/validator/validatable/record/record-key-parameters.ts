import Validator from '@alirya/validator/validator';
import MapInterface from '../../../map';
import Return from '@alirya/validator/validatable/infer-static';
import IteratorRecordKey from '../iterator/record-key-parameters';
import Value from '@alirya/value/value';

export default function RecordKeyParameters<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<keyof RecordType>,
>(
    value : RecordType,
    validator : ValidatorType
) : MapInterface<RecordType, Return<ValidatorType>>  {

    let result = {};

    for(const [key, validatable] of IteratorRecordKey(value, validator)) {

        result[key as PropertyKey] = validatable;
    }

    return <MapInterface<RecordType, Return<Value>>> result;
}
