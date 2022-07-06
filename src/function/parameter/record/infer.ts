import Callable from '@alirya/function/callable.js';

/**
 * get record of parameters from record of function
 */
type Infer<Values extends object> = {
    [Key in keyof Values] : Values[Key] extends Callable ? Parameters<Values[Key]> : never
};
export default Infer;
