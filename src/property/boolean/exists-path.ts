import {O} from 'ts-toolbelt';
import Exists from './exists.js';
import Object_ from '../../boolean/object.js';

/**
 * check if property exists
 */

export function ExistsPathParameters<
    ObjectType extends object,
    Keys extends (keyof ObjectType)[],
>(
     object : ObjectType,
     ...properties : Keys
) : object is ObjectType & O.P.Record<Keys, unknown>;

export function ExistsPathParameters<
    ObjectType extends object,
    Keys extends PropertyKey[]
>(
    object : ObjectType,
    ...properties : Keys
) : object is ObjectType & O.P.Record<Keys, unknown>;

export function ExistsPathParameters<
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

                    return ExistsPathParameters(next, ...properties);

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

export function ExistsPathParameter<
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

     return ExistsPathParameters(object, ...properties);
}


namespace ExistsPath {
    export const Parameters = ExistsPathParameters;
    export const Parameter = ExistsPathParameter;
}
export default ExistsPath;
