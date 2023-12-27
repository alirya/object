import Callable from '@axiona/function/callable.js';

/**
 * get record of first parameters from record of function
 */

type MapClassArgument<Values extends Record<PropertyKey, unknown[]>> = {
    [Key in keyof Values] : Values[Key] extends Callable ? Parameters<Values[Key]>[0] : never
};
export default MapClassArgument;
