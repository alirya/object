import Validatable from '@axiona/validatable/validatable.js';
import OrBoolean from './record/boolean/or.js';
import Validatables, {ValidatablesType as OrReturn} from './validatables.js';

export default function Or<
    Object extends Partial<Record<PropertyKey, Validatable>>
>(
    validatables : Object
) : OrReturn<Object, boolean> {

    return new Validatables.Parameters(validatables, OrBoolean);
}
