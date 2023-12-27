import Equal from '@axiona/boolean/equal.js';
import Callable from '@axiona/function/callable.js';
import {A} from 'ts-toolbelt';
import Compare from '@axiona/boolean/compare/compare.js';

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
export function DifferenceParameters<Type extends object, Compare extends object = Type>(
    object: Type,
    compare : Compare,
    validation : DifferenceParametersArgumentValidation<Type, Compare> = Equal.Parameters as DifferenceParametersArgumentValidation<Type, Compare>
) : Partial<Type> {

    const results : Partial<Type> = {};

    for(const key in object) {

        if(!validation(object[key], compare[key as PropertyKey], key)) {

            results[key] = object[key];
        }
    }

    return results;
}


export type DifferenceParameterArgumentValidation<Type extends object, CompareType extends object> = {
    object : Type[keyof Type];
    compare : A.At<CompareType, keyof Type>;
    key: keyof Type;
};

export type DifferenceParameterArgument<Type extends object, CompareType extends object> = Compare<Readonly<Type>> & {
    object: Readonly<Type>,
    validation:  Callable<[DifferenceParameterArgumentValidation<Type, CompareType>], boolean>,
};

/**
 * option version of {@see DifferenceParameters}
 */
export function DifferenceParameter<Type extends object, CompareType extends object = Type>(
    {
        object,
        compare,
        validation = ({object, compare}) => Equal.Parameter({value:object, compare}),
    } : DifferenceParameterArgument<Type, CompareType>
) : Partial<Type> {

    return DifferenceParameters(
        object,
        compare,
        (object, compare : any , key) => validation({key, object, compare})
    );
}


namespace Difference {
    export const Parameters = DifferenceParameters;
    export const Parameter = DifferenceParameter;
}
export default Difference;
