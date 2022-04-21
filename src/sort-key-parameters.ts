import Callable from '@alirya/function/callable';

export default function SortKeyParameters<
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