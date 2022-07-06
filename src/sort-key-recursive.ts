import SortKeyParameters from './sort-key.js';
import Callable from '@alirya/function/callable.js';
import IsObject from '@alirya/object/boolean/object.js';

export function SortKeyRecursiveParameters<
    Type extends object
>(
    object : Type,
    compare : Callable<[keyof Type, keyof Type], number>,
) : Type {

    const result = SortKeyParameters.Parameters(object, compare);

    for (const key in result) {

        if(IsObject(object[key])) {

            result[key] = object[key];
        }
    }

    return result as Type;
}

export function SortKeyRecursiveParameter<
    Type extends object
>(  {
        object,
        compare
    } : {
        object : Type,
        compare : Callable<[keyof Type, keyof Type], number>,
    }
) : Type {

    return SortKeyRecursiveParameters(object, compare);
}

namespace SortKeyRecursive {
    export const Parameters = SortKeyRecursiveParameters;
    export const Parameter = SortKeyRecursiveParameter;
}
export default SortKeyRecursive;
