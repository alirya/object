import Equal from '@alirya/boolean/equal';
import Callable from '@alirya/function/callable';
import {A} from 'ts-toolbelt';
import Compare from '@alirya/boolean/compare/compare';

export type DifferenceBothParametersArgumentValidation<Type extends Record<PropertyKey, any>, Compare extends Record<PropertyKey, any> = Type>
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
export function DifferenceBothParameters<
    Value extends Record<PropertyKey, any>,
    CompareType extends Record<PropertyKey, any> = Value
>(
    object: Value,
    compare : CompareType,
    validation : DifferenceBothParametersArgumentValidation<Value, CompareType> = Equal.Parameters as DifferenceBothParametersArgumentValidation<Value, CompareType>
) : Partial<Value> & Partial<Omit<CompareType, keyof Value>> {

    const results : Partial<Value|CompareType> = {};
    const keys : string[] = [];

    for(const key in object) {

        if(!validation(object[key as string], compare[key], key)) {

            keys.push(key);
            results[key] = object[key];
        }
    }

    for(const key in compare) {

        if(keys.includes(key)) {

            continue;
        }

        if(!validation(object[key as string], compare[key], key)) {

            results[key] = compare[key];
        }
    }

    return results as Partial<Value & Omit<CompareType, keyof Value>>;
}



export type DifferenceBothParameterArgumentValidation<Type extends object, CompareType extends object> = {
    object :  A.At<Type, keyof Type|keyof CompareType>;
    compare : A.At<CompareType, keyof Type|keyof CompareType>;
    key: keyof Type|keyof CompareType;
};

export type DifferenceBothParameterArgument<Type extends object, CompareType extends object> = Compare<Readonly<Type>> & {
    object: Readonly<Type>,
    validation:  Callable<[DifferenceBothParameterArgumentValidation<Type, CompareType>], boolean>,
};

/**
 * option version of {@see DifferenceBothParameters}
 * @param list
 * @param validation
 */
export function DifferenceBothParameter<Value extends object, CompareType extends object = Value>(
    {
        object,
        compare,
        validation = ({object, compare}) => Equal.Parameter({value:object, compare}),
    } : DifferenceBothParameterArgument<Value, CompareType>
) : Partial<Value> {

    return DifferenceBothParameters(
        object,
        compare,
        (object, compare : any, key) => validation({key, object, compare})
    );
}


namespace DifferenceBoth {
    export const Parameters = DifferenceBothParameters;
    export const Parameter = DifferenceBothParameter;
}
export default DifferenceBoth;
