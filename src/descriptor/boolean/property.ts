import HasProperty from '../../property/boolean/exists.js';
import PropertyInterface from '../property.js';

export default function Property(value : PropertyDescriptor) : value is PropertyInterface {

    if(!HasProperty.Parameters(value, 'value')) {

        return false;
    }

    return true;
}
