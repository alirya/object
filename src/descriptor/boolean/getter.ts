import Method from '../../boolean/method.js';
import GetterInterface from '../getter.js';

export default function Getter(value : PropertyDescriptor) : value is GetterInterface {

    return Method(value, 'get');
}
