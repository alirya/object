
import Callable from '@alirya/function/callable';
import SetPathParameters from './set-path-parameters';

/**
 * parse data from flat key
 *
 * this parse value from flat name key as path of object
 *
 * example:
 * {
 *     PREFIX_KEY_A : value1,
 *     PREFIX_KEY_B : value2,
 * }
 * converted to :
 * {
 *     key : {
 *         a : value1,
 *         b : value2,
 *     }
 * }
 *
 * @param object
 * @param prefix
 * prefix of key, will not be included
 *
 * @param callback
 */
export default function EnvironmentParameters<
    Assumption extends object,
    Flat extends Record<string, any> = Record<string, any>
>(
    object: Flat,
    prefix: string,
    callback : Callable<[keys:string[], key:string, value:any], Flat[keyof Flat]> = (keys, key, value)=>value
) : Partial<Assumption> {

    let config : Partial<Assumption> = {};

    if(prefix.match(/[^A-Za-z0-9_]/)) {

        throw new Error('prefix must alnum or underscore');
    }

    const match = new RegExp(`^${prefix}[^A-Za-z0-9]`, 'i');

    for (let key in object) {

        if(key.match(match)) {

            const path = key.replace(match, '').toLowerCase().split(/[^A-Za-z0-9]/);

            const value = callback(Array.from(path), key, object[key] as string);

            config = SetPathParameters(config as object, value, ...path);
        }
    }

    return config;
}
