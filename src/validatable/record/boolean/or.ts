import Empty from '../../../boolean/empty.js';
import Valid from '../valid.js';
import Validatable from '@alirya/validatable/validatable.js';
import OmitUndefined from '../../../omit-undefined.js';

export default function Or<
    Object extends Partial<Record<PropertyKey, Validatable>>
>(object : Object) : boolean {

    return !Empty(Valid(OmitUndefined(object)));
}
