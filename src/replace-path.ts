import {Object} from "ts-toolbelt";

/**
 * Replace {@template Object} value with {@template Replace} at {@template Property}
 */
type ReplacePath<
    Target extends object,
    Replace extends any,
    Properties extends ReadonlyArray<PropertyKey>,
> = Object.P.Omit<Target, Properties> & Object.P.Record<Properties, Replace>;

export default ReplacePath;
