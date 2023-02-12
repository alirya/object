import Value from '@alirya/value/value.js';
import EmptyArgument from '../../boolean/empty.js';

export default function Empty(
    object : Value<object>,
) : boolean {

    return EmptyArgument(object.value);
}
