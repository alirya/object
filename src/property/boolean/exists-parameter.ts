import {Required} from 'utility-types';
import ExistsParameters from './exists-parameters';

/**
 * check if property exists
 */
export default function ExistsParameter<
    ObjectType extends object,
    Key extends PropertyKey
>(  {
         object,
         property
    } : {
         object : ObjectType,
         property : Key
    }
) : boolean {

     return ExistsParameters(object, property);
}
