import HasProperty from '../../property/boolean/exists';
import PropertyInterface from '../property';

export default function Property(value : PropertyDescriptor) : value is PropertyInterface {

    if(!HasProperty.Parameters(value, 'value')) {

        return false;
    }

    return true;
}
