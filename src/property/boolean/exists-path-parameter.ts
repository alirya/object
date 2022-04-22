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
