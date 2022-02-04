import Validatable from '@alirya/validatable/validatable';
import OrBoolean from './record/boolean/or';
import Validatables, {ValidatablesType as OrReturn} from './validatables-parameters';

export default function Or<
    Object extends Partial<Record<PropertyKey, Validatable>>
>(
    validatables : Object
) : OrReturn<Object, boolean> {

    return new Validatables(validatables, OrBoolean);
}
