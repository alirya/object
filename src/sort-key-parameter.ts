import Callable from '@alirya/function/callable';
import SortKeyParameters from './sort-key-parameters';

export default function SortKeyParameter<
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