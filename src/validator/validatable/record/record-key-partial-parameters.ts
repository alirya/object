import Validator from '@alirya/validator/validator';
import MapInterface from '../../../map';
import Return from '@alirya/validator/validatable/infer-static';
import IteratorRecordKey from '../iterator/record-key-parameters';

export default function RecordKeyPartialParameters<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<keyof RecordType>,
>(
    value : RecordType,
    validator : ValidatorType,
    stop = false,
) : Partial<MapInterface<RecordType, Return<ValidatorType>>> {

    let result = {};

    for(const [key, validatable] of IteratorRecordKey(value, validator)) {

        result[key as PropertyKey] = validatable;

        if(validatable.valid === stop) {

            return result;
        }
    }

    return result;
}
