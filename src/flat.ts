import Callable from '@axiona/function/callable.js';
import Object_ from './boolean/object.js';
import IsArray from '@axiona/array/boolean/array.js';
import {TrimParameters} from '@axiona/string/trim.js';


/**
 * parse data from flat key
 *
 * this parse value from flat name key as path of object
 *
 *
 * @param object
 * @param delimiter
 * @default '_'
 *
 * @param prefix
 * @default ''
 * prefix of key to be added
 *
 * @param value
 * callback for processing value
 * @param keys
 * callback for processing keys
 *
 * @example:
 * @param prefix PREFIX
 * @param delimiter '_'
 * @param object
 * {
 *     key : {
 *         a : value1,
 *         b : value2,
 *     }
 * }
 * @return
 * {
 *     PREFIX_KEY_A : value1,
 *     PREFIX_KEY_B : value2,
 * }
 */
export function FlatParameters<
    Type extends Record<string, unknown> = Record<string, unknown>
>(
    object: Type,
    delimiter = '_',
    prefix = '',
    value : Callable<[keys:(string|number)[], value:unknown], unknown> = (keys, value)=>value,
    keys : Callable<[keys:(string|number)[], value:unknown], (string|number)[]> = (keys, value)=>keys,
) : Record<string, unknown> {

    prefix = TrimParameters(prefix, delimiter);

    const result : Record<string, unknown> = {};

    for (let [properties, val] of FlatMerger(object, [])) {

        val = value(Array.from(properties), val);

        const property = [prefix, ...keys(properties, val)]
            .filter(key=>key.toString().length)
            .join(delimiter);

        result[property as string] = val;
    }

    return result;
}

function * FlatMerger<
    Value extends unknown
>(
    value: unknown,
    keys: (number|string)[]
) : Iterable<[keys:(number|string)[], value:unknown]> {

    if(IsArray(value)) {

        for (const [key, val] of value.entries()) {

            yield * FlatMerger(val, [...keys, key]);
        }

    } else if(Object_(value)) {

        for (const key in value) {

            yield * FlatMerger(value[key], [...keys, key]);
        }

    } else {

        yield [keys, value];
    }
}

export type FlatArgument<
    Type extends Record<string, unknown> = Record<string, unknown>
> = {
    object: Type,
    delimiter?: string,
    prefix?: string,
    value?: Callable<[{ keys: (string | number)[], value: unknown }], unknown>,
    keys?: Callable<[{ keys: (string | number)[], value: unknown }], (string|number)[]>,
};

export function FlatParameter<
    Flat extends Record<string, any> = Record<string, any>
>(  {
     object,
     delimiter,
     prefix,
     value = ({value}) => value,
     keys = ({keys}) => keys,
    } : FlatArgument<Flat>
) : Record<string, unknown> {

    return FlatParameters(object, delimiter, prefix,
        (ks, v)=>value({keys:ks, value:v}),
        (ks, v)=>keys({keys:ks, value:v})
    );
}


namespace Flat {
    export const Parameters = FlatParameters;
    export const Parameter = FlatParameter;
    export type Argument<
        Type extends Record<string, unknown> = Record<string, unknown>
    > = FlatArgument<Type>;
}
export default Flat;
