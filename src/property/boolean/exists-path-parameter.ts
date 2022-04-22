import {Required} from 'utility-types';
import {O} from 'ts-toolbelt';
import Exists from './exists';
import Object_ from '../../boolean/object';
import ExistsPathParameters from './exists-path-parameters';

/**
 * check if property exists
 */

export default function ExistsPathParameter<
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
