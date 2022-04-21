import SortKeyParameters from './sort-key-parameters';
import Callable from '@alirya/function/callable';
import IsObject from '@alirya/object/boolean/object';

export default function SortKeyRecursiveParameters<
    Type extends object
>(
    object : Type,
    compare : Callable<[keyof Type, keyof Type], number>,
) : Type {

    const result = SortKeyParameters(object, compare);

    for (const key in result) {

        if(IsObject(object[key])) {

            result[key] = object[key];
        }
    }

    return result as Type;
}