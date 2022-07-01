import Validator from '@alirya/validator/validator';
import MapInterface from '../../../map';
import {O} from 'ts-toolbelt';
import InferStatic from '@alirya/validator/validatable/infer-static';
import IteratorRecordValue from '../iterator/record-value';
import Value from '@alirya/value/value';
import ValidatorContainer from '@alirya/validator/validator/validator';

export function RecordValueParameters<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<O.UnionOf<RecordType>>,
>(
    value : RecordType,
    validator : ValidatorType,
) : MapInterface<RecordType, InferStatic<ValidatorType>> {

    let result = {};

    for(const [key, validatable] of IteratorRecordValue.Parameters(value, validator)) {

        result[key as PropertyKey] = validatable;
    }

    return <MapInterface<RecordType, InferStatic<ValidatorType>>> result;
}


export function RecordValueParameter<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<O.UnionOf<RecordType>>,
>(
    {
        value,
        validator,
    } : Value<RecordType> & ValidatorContainer<ValidatorType>
) : MapInterface<RecordType, InferStatic<ValidatorType>> {

    return RecordValueParameters(value, validator);
}


namespace RecordValue {
    export const Parameters = RecordValueParameters;
    export const Parameter = RecordValueParameter;
}
export default RecordValue;
