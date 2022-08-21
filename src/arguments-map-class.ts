
/**
 * map record of parameters {@link any[]} to record of function with the same parameter
 */

type ArgumentsMapClass<
    Arguments extends Record<PropertyKey, unknown[]>,
    Returns extends Record<keyof Arguments, any> = Record<keyof Arguments, any>,
> = {
    [Key in keyof Arguments] :  (...args:Arguments[Key])=>Returns[Key]
};
export default ArgumentsMapClass;
