import Validatable from '@alirya/validatable/validatable';
import GuardValidatable from '@alirya/validatable/boolean/validatable';
import Filter from '../../filter';
import ValidatableValid from '@alirya/validatable/boolean/value';
/**
 * filter all valid {@link Validatable} while retain its original structure
 */
export default function Valid<
    Object extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>
>(
    record : Object
) : Partial<Object> {

    let validation = (v) => GuardValidatable(v) && ValidatableValid(v);
    return  Filter(record, validation);
}

