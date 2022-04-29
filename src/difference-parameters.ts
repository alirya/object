import Equal from '@alirya/boolean/equal-parameters';
import Callable from '@alirya/function/callable';
import {A} from 'ts-toolbelt';

export type DifferenceParametersArgumentValidation<Type extends object, Compare extends object = Type>
    = Callable<[Type[keyof Type], A.At<Compare, keyof Type>, keyof Type], boolean>;
/**
 * return all data from {@param object} that does not match with {@param compare}
 *
 * @param object
 * base object that value to be returned
 *
 * @param compare
 * object to be compared
 *
 * @param validation
 * comparison for {@param object} and {@param compare} value, if valid
 * value {@param object} will be returned
 *
 * @example
 * (    {   number : 1,
 *          string : 'a',
 *          boolean : true,
 *      },
 *      {
 *          number : 1,
 *          object : {}
 *      }
 *  )=> {
 *          string : 'a',
 *          boolean : true,
 *      }
 */
export default function DifferenceParameters<Type extends object, Compare extends object = Type>(
    object: Type,
    compare : Compare,
    validation : DifferenceParametersArgumentValidation<Type, Compare> = Equal as DifferenceParametersArgumentValidation<Type, Compare>
) : Partial<Type> {

    const results : Partial<Type> = {};

    for(const key in object) {

        if(!validation(object[key], compare[key as PropertyKey], key)) {

            results[key] = object[key];
        }
    }

    return results;
}
