import Validatable from '@alirya/validatable/validatable';
import OrBoolean from './record/boolean/or';
import Validatables, {ValidatablesType} from './validatables-parameters';

export default function Or<
    Object extends Partial<Record<PropertyKey, Validatable>>
>(
    validatables : Object
) : ValidatablesType<Object, boolean> {

    return new Validatables(validatables, OrBoolean);
}
