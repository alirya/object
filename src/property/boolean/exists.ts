import {Required} from 'utility-types';

/**
 * check if property exists
 */

export function ExistsParameters<
    ObjectType extends object,
    Key extends keyof ObjectType,
>(
     object : ObjectType,
     property : Key
) : object is (Key extends keyof ObjectType ? Required<ObjectType, Key> : ObjectType);

export function ExistsParameters<
    ObjectType extends object,
    Key extends PropertyKey
>(
    object : ObjectType,
    property : Key
) : object is ObjectType & Record<Key, any>;

export function ExistsParameters<
    ObjectType extends object,
    Key extends PropertyKey
>(
    object : ObjectType,
    property : Key
) : boolean {

     return property in object;
}


/**
 * check if property exists
 */
export function ExistsParameter<
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


namespace Exists {
    export const Parameters = ExistsParameters;
    export const Parameter = ExistsParameter;
}
export default Exists;
