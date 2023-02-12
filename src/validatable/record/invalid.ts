import Validatable from '@alirya/validatable/validatable.js';
import Filter from '../../filter.js';
import GuardValidatable from '@alirya/validatable/boolean/validatable.js';
import ValidatableInvalid from '@alirya/validatable/boolean/invalid.js';

/**
 * filter all invalid {@link Validatable} while retain its original structure
 */
export default function Invalid<
    Object extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>
>(
    record : Object
) : Partial<Object> {

    const validation = (v) => GuardValidatable(v) && ValidatableInvalid(v);

    return Filter(record, validation);
}

