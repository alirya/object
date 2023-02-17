import Callable from '@alirya/function/callable.js';
import {SetPathParameters} from './set-path.js';
import Escape from '@alirya/string/pattern/escape.js';
import NotEmpty from '@alirya/string/ensure/not-empty.js';
import CaseInsensitiveObject from 'case-insensitive-object';
import MapCallback from './map-callback.js';
import Object_ from './boolean/object.js';
import {IsFunction} from '@alirya/function/boolean/function.js';
import CaseInsensitive from './case-insensitive';


export type InflateType<
    Flat extends Record<string, unknown>,
    Value = Flat[keyof Flat]
    > = Record<string, Record<string, Flat[keyof Flat]|Value>|Flat[keyof Flat]|Value>;
/**
 * parse data from flat key
 *
 * this parse value from flat name key as path of object
 *
 * @param object
 *
 * @param delimiter
 * @default '_'
 *
 * @param prefix
 * @default ''
 * prefix of key, will not be included
 *
 * @param value
 * callback for processing value
 *
 * @param keys
 * callback for processing keys
 *
 *
 * @example:
 * @param delimiter '_'
 * @param prefix prefix_key
 *
 * @param object
 * {
 *     prefix_key_a : value1,
 *     prefix_key_b : value2,
 * }
 *
 * @param flat
 * include full path with removed delimiter
 * return also
 * {
 *      keya : value1,
 *      keyb : value2
 * }
 *
 * @param original
 * include full path with  delimiter
 * return also
 * {
 *      key_a : value1,
 *      key_b : value2
 * }
 * @return
 * {
 *     key : {
 *         a : value1,
 *         b : value2,
 *     }
 * }
 */
export function InflateParameters<
    Flat extends Record<string, unknown> = Record<string, unknown>,
    Value = Flat[keyof Flat]
>(
    object: Flat,
    prefix = '',
    delimiter = '_',
    value : Callable<[key:string, keys:string[], value:Flat[keyof Flat]], Flat[keyof Flat]|Value> = ( key, keys, value)=>value,
    keys : Callable<[key:string, keys:string[], value:Flat[keyof Flat]], string[]> = ( key, keys, value)=>keys,
    flat = false,
    original = false,
) : InflateType<Flat, Value> {

    delimiter = NotEmpty(delimiter);

    let result = {};

    if(prefix.match(/[^A-Za-z0-9_]/)) {

        throw new Error('prefix must alnum or underscore');
    }

    const escaped = Escape(delimiter[0]);

    const prefixMatch = new RegExp(`^${prefix}${escaped}?`, 'i');
    const delimiterMatch = new RegExp(escaped, 'gi');

    for (const key in object) {

        if(key.match(prefixMatch)) {

            let path = key.replace(prefixMatch, '').split(delimiterMatch);

            const val = value(key, Array.from(path), object[key]);

            path = keys(key, Array.from(path), object[key]);

            result = SetPathParameters(result as object, val, ...path);

            if(flat) {
                result[path.join('')] = val;
            }

            if(original) {
                result[path.join(delimiter)] = val;
            }
        }
    }

    return InflateInsensitive(result) as any as InflateType<Flat, Value> ;
}

export function InflateInsensitive<Type extends unknown>(
    object: Type
) : Type {

    if(Array.isArray(object)) {

        return object.map(InflateInsensitive) as Type;
    }

    if(Object_(object)) {

        return CaseInsensitive(MapCallback(object, InflateInsensitive)) as Type;
    }

    return object;
}

export type InflateArgument<
    Type extends Record<string, unknown> = Record<string, unknown>,
    Value = Type[keyof Type]
> = {
    object: Type,
    delimiter?: string,
    prefix?: string,
    value?: Callable<[{ key: string, keys: string[], value: Type[keyof Type] }], Type[keyof Type]|Value>,
    keys?: Callable<[{ key: string, keys: string[], value: Type[keyof Type] }], string[]>,
    flat?: boolean,
    original?: boolean,
};

export function InflateParameter<
    Flat extends Record<string, any> = Record<string, any>,
    Value = Flat[keyof Flat]
>(  {
        object,
        delimiter,
        flat,
        original,
        prefix,
        value = ({value}) => value,
        keys = ({keys}) => keys,
    } : InflateArgument<Flat, Value>
) : InflateType<Flat, Value> {

    return InflateParameters(
        object,
        prefix,
        delimiter,
        (key, ks, v)=>value({key, keys:ks, value:v}),
        (key, ks, v)=>keys({key, keys:ks, value:v}),
        flat,
        original
    );
}


namespace Inflate {
    export const Parameters = InflateParameters;
    export const Parameter = InflateParameter;
}
export default Inflate;
