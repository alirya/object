import Validator from '@alirya/validator/validator';
import MapInterface from '../../../map';
import {O} from 'ts-toolbelt';
import InferStatic from '@alirya/validator/validatable/infer-static';
import Value from '@alirya/value/value';
import ValidatorContainer from '@alirya/validator/validator/validator';
import RecordValuePartialParameters from './record-value-partial-parameters';

export default function RecordValuePartialParameter<
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
