import Callable from '@alirya/function/callable.js';

export function SortKeyParameters<
    Type extends object
>(
    object : Type,
    compare : Callable<[keyof Type, keyof Type], number>,
) : Type {

    const result : Partial<Type> = {};


    const keys = (Object.keys(object) as (keyof Type)[]).sort(compare);

    for (const key of keys) {

        result[key] = object[key];
    }

    return result as Type;
}

export function SortKeyParameter<
    Type extends object
>(  {
        object,
        compare
    } : {
        object : Type,
        compare : Callable<[keyof Type, keyof Type], number>,
    }
) : Type {

    return SortKeyParameters(object, compare);
}

namespace SortKey {
    export const Parameters = SortKeyParameters;
    export const Parameter = SortKeyParameter;
}
export default SortKey;
