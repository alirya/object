import {O} from 'ts-toolbelt';
import Exists from './exists.js';
import Object_ from '../../boolean/object.js';

/**
 * check if property exists
 */

export function ExistsDeepParameters<
    ObjectType extends object,
    Keys extends (keyof ObjectType)[],
>(
     object : ObjectType,
     ...properties : Keys
) : object is ObjectType & O.P.Record<Keys, unknown>;

export function ExistsDeepParameters<
    ObjectType extends object,
    Keys extends PropertyKey[]
>(
    object : ObjectType,
    ...properties : Keys
) : object is ObjectType & O.P.Record<Keys, unknown>;

export function ExistsDeepParameters<
    ObjectType extends object,
    Keys extends PropertyKey[]
>(
    object : ObjectType,
    ...properties : Keys
) : boolean {

     const property = properties.shift();

     if(property) {

          if(Exists.Parameters(object, property)) {

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


/**
 * check if property exists
 */

export function ExistsDeepParameter<
    ObjectType extends object,
    Keys extends (keyof ObjectType)[],
>(   {
          object,
          properties
     } : {
          object : ObjectType,
          properties : Keys,
     }
) : boolean {

     return ExistsDeepParameters(object, ...properties);
}


namespace ExistsDeep {
    export const Parameters = ExistsDeepParameters;
    export const Parameter = ExistsDeepParameter;
}
export default ExistsDeep;
