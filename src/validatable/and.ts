import Validatable from '@alirya/validatable/validatable';
import AndBoolean from './record/boolean/and';
import Validatables, {ValidatablesType} from './validatables-parameters';

export default function And<
    Object extends Partial<Record<PropertyKey, Validatable>>
>(
    validatables : Object
) : ValidatablesType<Object> {

    return new Validatables(validatables, AndBoolean);
}
