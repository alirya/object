import Callable from '@alirya/function/callable.js';


/**
 * get record of returns from record of function
 */

type MapReturn<Values extends object> = {
    [Key in keyof Values]:  Values[Key] extends Callable ? ReturnType<Values[Key]> : never
};
export default MapReturn;
