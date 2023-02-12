import Validatable from '@alirya/validatable/validatable.js';
import GuardValidatable from '@alirya/validatable/boolean/validatable.js';
import Filter from '../../filter.js';
import ValidatableValid from '@alirya/validatable/boolean/value.js';
/**
 * filter all valid {@link Validatable} while retain its original structure
 */
export default function Valid<
    Object extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>
>(
    record : Object
) : Partial<Object> {

    const validation = (v) => GuardValidatable(v) && ValidatableValid(v);
    return  Filter(record, validation);
}

