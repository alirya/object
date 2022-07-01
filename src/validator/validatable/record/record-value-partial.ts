import Validator from '@alirya/validator/validator';
import MapInterface from '../../../map';
import {O} from 'ts-toolbelt';
import InferStatic from '@alirya/validator/validatable/infer-static';
import IteratorRecordValue from '../iterator/record-value';
import Value from '@alirya/value/value';
import ValidatorContainer from '@alirya/validator/validator/validator';


export function RecordValuePartialParameters<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<O.UnionOf<RecordType>>,
>(
     value : RecordType,
     validator : ValidatorType,
     stop = false,
) : Partial<MapInterface<RecordType, InferStatic<ValidatorType>>> {

    let result = {};

    for(const [key, validatable] of IteratorRecordValue.Parameters(value, validator)) {

        result[key as PropertyKey] = validatable;

        if(validatable.valid === stop) {

            return result;
        }
    }

    return result;
}


export function RecordValuePartialParameter<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<O.UnionOf<RecordType>>,
>(
    {
        value,
        validator,
        stop,
    } : Value<RecordType> & ValidatorContainer<ValidatorType> & {stop ?: boolean}
) : Partial<MapInterface<RecordType, InferStatic<ValidatorType>>> {

    return RecordValuePartialParameters(value, validator, stop);
}


namespace RecordValuePartial {
    export const Parameters = RecordValuePartialParameters;
    export const Parameter = RecordValuePartialParameter;
}
export default RecordValuePartial;
