import Validatable from '@alirya/validatable/validatable';
import AndBoolean from './record/boolean/and';
import Validatables, {ValidatablesType as AndReturn} from './validatables';

export {AndReturn};

export default function And<
    Object extends Partial<Record<PropertyKey, Validatable>>
>(
    validatables : Object
) : AndReturn<Object> {

    return new Validatables.Parameters(validatables, AndBoolean);
}
