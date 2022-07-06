import Callable from '@alirya/function/callable.js';

/**
 * get record of first parameters from record of function
 */

type InferSingle<Values extends object> = {
    [Key in keyof Values] : Values[Key] extends Callable ? Parameters<Values[Key]>[0] : never
};
export default InferSingle;
