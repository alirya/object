import Callable from '@alirya/function/callable.js';

/**
 * get record of parameters from record of function
 */
type MapClassArguments<Values extends Record<PropertyKey, unknown[]>> = {
    [Key in keyof Values] : Values[Key] extends Callable ? Parameters<Values[Key]> : never
};
export default MapClassArguments;
