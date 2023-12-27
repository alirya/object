import Empty from '../../../boolean/empty.js';
import Invalid from '../invalid.js';
import Validatable from '@axiona/validatable/validatable.js';
import OmitUndefined from '../../../omit-undefined.js';

export default function And<
    Object extends Partial<Record<PropertyKey, Validatable>>
>(object : Object) : boolean {

    return Empty(Invalid(OmitUndefined(object)));
}
