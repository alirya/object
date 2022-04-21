import SortKeyParameters from './sort-key-parameters';
import Callable from '@alirya/function/callable';
import IsObject from '@alirya/object/boolean/object';
import SortKeyRecursiveParameters from './sort-key-recursive-parameters';

export default function SortKeyRecursiveParameter<
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