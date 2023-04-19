
/**
 * map record of parameter to record of function with the same parameter
 */
type ArgumentMapClass<
    Arguments extends Record<PropertyKey, unknown>,
    Returns extends Record<keyof Arguments, any> = Record<keyof Arguments, any>,
> = {
    [Key in keyof Arguments] : (arg:Arguments[Key])=>Returns[Key]
};
export default ArgumentMapClass;
