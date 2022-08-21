import MapReturn from './map-return';
import {O} from 'ts-toolbelt';
import ArgumentMapClass from './argument-map-class';
import Value from '@alirya/value/value';
import ArgumentContainer from '@alirya/function/argument/argument';
import ArgumentsMapClass from './arguments-map-class';


export type MethodCallMapSingleType<
    Argument extends Record<PropertyKey, unknown>,
    Type extends ArgumentMapClass<Argument>,
    > = O.Pick<MapReturn<Type>, keyof Argument>;

/**
 * call an record of function or object, by using key from {@param argument} and it's value
 * as first argument
 *
 * @param object
 * @param argument
 */

export function MethodCallMapSingleSingleParameters<
    Argument extends Record<PropertyKey, unknown>,
    Type extends ArgumentMapClass<Argument>,
>(
    object : Type,
    argument : Argument
) : MethodCallMapSingleType<Argument, Type> {

    let result : Partial<MethodCallMapSingleType<Argument, Type>> = {};

    for (const property in argument) {

        if(object[property]) {

            result[property] = object[property](argument[property]);
        }
    }

    return <MethodCallMapSingleType<Argument, Type>> result;
}


/**
 * call an record of function or object, by using key from {@param argument} and it's value
 * as first argument
 *
 * @param object
 * @param argument
 */


export type MethodCallMapSingleSingleArgument<
    Argument extends Record<PropertyKey, unknown>,
    Type extends ArgumentMapClass<Argument>,
> =
    Value<Type> &
    ArgumentContainer<Argument>;

export function MethodCallMapSingleSingleParameter<
    Argument extends Record<PropertyKey, unknown>,
    Type extends ArgumentMapClass<Argument>,
    >(
    {
        value,
        argument,
    } : MethodCallMapSingleSingleArgument<Argument, Type>
) : MethodCallMapSingleType<Argument, Type>  {

    return MethodCallMapSingleSingleParameters(value, argument);
}



namespace MethodCallMapSingleSingle {
    export const Parameters = MethodCallMapSingleSingleParameters;
    export const Parameter = MethodCallMapSingleSingleParameter;
    export type Argument<
        Argument extends Record<PropertyKey, unknown>,
        Type extends ArgumentMapClass<Argument>,
    > = MethodCallMapSingleSingleArgument<
        Argument,
        Type
    >;
}
export default MethodCallMapSingleSingle;
