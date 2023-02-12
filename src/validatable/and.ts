import Validatable from '@alirya/validatable/validatable.js';
import AndBoolean from './record/boolean/and.js';
import Validatables, {ValidatablesType as AndReturn} from './validatables.js';

export {AndReturn};

export default function And<
    Object extends Partial<Record<PropertyKey, Validatable>>
>(
    validatables : Object
) : AndReturn<Object> {

    return new Validatables.Parameters(validatables, AndBoolean);
}
