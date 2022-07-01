import Validatable from '@alirya/validatable/validatable';
import TypeRecord from '../../../boolean/record';
import ValidatableType from '@alirya/validatable/boolean/validatable';

/**
 * Check if {@param record} is record of {@link Validatable}
 */
export default function Record<
    Object extends Record<PropertyKey, Validatable>
>(
    record : object,
) : record is Object;

export default function Record<
    Object extends Record<Key, Validatable>,
    Key extends PropertyKey = PropertyKey
>(
    record : object,
    property : (value:PropertyKey)=>value is Key
) : record is Object;

export default function Record<
    Object extends Record<Key, Validatable>,
    Key extends PropertyKey = PropertyKey
>(
    record : object,
    property ? : (value:PropertyKey)=>value is Key
) : record is Object {

    return TypeRecord.Parameters(record, ValidatableType, <(value:PropertyKey)=>value is Key>property);
}
