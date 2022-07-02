import Equal from '@alirya/boolean/equal-parameters';
import Callable from '@alirya/function/callable';
import {A} from 'ts-toolbelt';

export type DifferenceBothParametersArgumentValidation<Type extends object, Compare extends object = Type>
    = Callable<[A.At<Type, keyof Type|keyof Compare>, A.At<Compare, keyof Type|keyof Compare>, keyof Type|keyof Compare], boolean>;
/**
 * return data from {@param object} and {@param compare} that does not match with
 *
 * @param object
 * main object that value to be returned
 *
 * @param compare
 * secondary object that value to be returned
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
export default function DifferenceBothParameters<
    Value extends object,
    CompareType extends object = Value
>(
    object: Value,
    compare : CompareType,
    validation : DifferenceBothParametersArgumentValidation<Value, CompareType> = Equal as DifferenceBothParametersArgumentValidation<Value, CompareType>
) : Partial<Value> & Partial<Omit<CompareType, keyof Value>> {

    const results : Partial<Value|CompareType> = {};
    const keys : string[] = [];

    for(const key in object) {

        if(!validation(object[key as string], compare[key as PropertyKey], key)) {

            keys.push(key);
            results[key as string] = object[key];
        }
    }

    for(const key in compare) {

        if(keys.includes(key)) {

            continue;
        }

        if(!validation(object[key as string], compare[key as PropertyKey], key)) {

            results[key as string] = compare[key];
        }
    }

    return results as Partial<Value & Omit<CompareType, keyof Value>>;
}
