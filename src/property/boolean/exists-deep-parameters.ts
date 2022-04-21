import {Required} from 'utility-types';
import {O} from 'ts-toolbelt';
import Exists from './exists-parameters';
import Object_ from '../../boolean/object';

/**
 * check if property exists
 */

export default function ExistsDeepParameters<
    ObjectType extends object,
    Keys extends (keyof ObjectType)[],
>(
     object : ObjectType,
     ...properties : Keys
) : object is ObjectType & O.P.Record<Keys, unknown>;

export default function ExistsDeepParameters<
    ObjectType extends object,
    Keys extends PropertyKey[]
>(
    object : ObjectType,
    ...properties : Keys
) : object is ObjectType & O.P.Record<Keys, unknown>;

export default function ExistsDeepParameters<
    ObjectType extends object,
    Keys extends PropertyKey[]
>(
    object : ObjectType,
    ...properties : Keys
) : boolean {

     const property = properties.shift();

     if(property) {

          if(Exists(object, property)) {

               const next = object[property];

               if(Object_(next)) {

                    return ExistsDeepParameters(next, ...properties);

               } else {

                    return properties.length === 0;
               }

          }

          return false;
     }

     return true;
}
