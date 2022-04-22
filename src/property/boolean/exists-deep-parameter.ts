import ExistsDeepParameters from './exists-deep-parameters';

/**
 * check if property exists
 */

export default function ExistsDeepParameter<
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
