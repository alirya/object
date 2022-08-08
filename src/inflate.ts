import Callable from '@alirya/function/callable';
import {SetPathParameters} from './set-path';
import Escape from '../../string/dist/pattern/escape';


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
    delimiter: string = '_',
    prefix: string = '',
    value : Callable<[key:string, keys:string[], value:Flat[keyof Flat]], Flat[keyof Flat]|Value> = ( key, keys, value)=>value,
    keys : Callable<[key:string, keys:string[], value:Flat[keyof Flat]], string[]> = ( key, keys, value)=>keys,
) : InflateType<Flat, Value> {

    let config = {};

    if(prefix.match(/[^A-Za-z0-9_]/)) {

        throw new Error('prefix must alnum or underscore');
    }

    const escaped = Escape(delimiter[0]);

    const prefixMatch = new RegExp(`^${prefix}${escaped}?`, 'i');
    const delimiterMatch = new RegExp(escaped, 'gi');

    for (let key in object) {

        if(key.match(delimiterMatch)) {

            let path = key.replace(prefixMatch, '').split(delimiterMatch);

            const val = value(key, Array.from(path), object[key]);

            path = keys(key, Array.from(path), object[key]);

            config = SetPathParameters(config as object, val, ...path);
        }
    }

    return config;
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
};

export function InflateParameter<
    Flat extends Record<string, any> = Record<string, any>,
    Value = Flat[keyof Flat]
>(  {
        object,
        delimiter,
        prefix,
        value = ({value}) => value,
        keys = ({keys}) => keys,
    } : InflateArgument<Flat, Value>
) : InflateType<Flat, Value> {

    return InflateParameters(
        object,
        delimiter,
        prefix,
        (key, ks, v)=>value({key, keys:ks, value:v}),
        (key, ks, v)=>keys({key, keys:ks, value:v})
    );
}


namespace Inflate {
    export const Parameters = InflateParameters;
    export const Parameter = InflateParameter;
}
export default Inflate;
