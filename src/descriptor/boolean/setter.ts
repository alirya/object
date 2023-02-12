import Method from '../../boolean/method.js';
import SetterInterface from '../setter.js';

export default function Setter(value : PropertyDescriptor) : value is SetterInterface {

    return Method(value, 'set');
}
