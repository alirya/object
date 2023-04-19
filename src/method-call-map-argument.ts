import MapReturn from './map-return.js';
import {O} from 'ts-toolbelt';
import ArgumentMapClass from './argument-map-class.js';
import Value from '@alirya/value/value.js';
import ArgumentContainer from '@alirya/function/argument/argument.js';
import ArgumentsMapClass from './arguments-map-class.js';


export type MethodCallMapArgumentType<
    Argument extends Record<PropertyKey, unknown>,
    Type extends ArgumentMapClass<Argument>,
    > = O.Pick<MapReturn<Type>, keyof Argument>;

/**
 * call a record of function or object, by using key from {@param argument} and it's value
 * as first argument
 *
 * @param object
 * @param argument
 */

export function MethodCallMapArgumentParameters<
    Argument extends Record<PropertyKey, unknown>,
    Type extends ArgumentMapClass<Argument> = ArgumentMapClass<Argument>,
>(
    object : Type,
    argument : Partial<Argument>
) : MethodCallMapArgumentType<Argument, Type> {

    const result : Partial<MethodCallMapArgumentType<Argument, Type>> = {};

    for (const property in argument) {

        if(object[property]) {

            result[property] = object[property]((argument as Argument)[property]);
        }
    }

    return <MethodCallMapArgumentType<Argument, Type>> result;
}


/**
 * call an record of function or object, by using key from {@param argument} and it's value
 * as first argument
 *
 * @param object
 * @param argument
 */


export type MethodCallMapArgumentArgument<
    Argument extends Record<PropertyKey, unknown>,
    Type extends ArgumentMapClass<Argument>,
> =
    Value<Type> &
    ArgumentContainer<Partial<Argument>>;

export function MethodCallMapArgumentParameter<
    Argument extends Record<PropertyKey, unknown>,
    Type extends ArgumentMapClass<Argument>,
    >(
    {
        value,
        argument,
    } : MethodCallMapArgumentArgument<Argument, Type>
) : MethodCallMapArgumentType<Argument, Type>  {

    return MethodCallMapArgumentParameters(value, argument);
}



namespace MethodCallMapArgument {
    export const Parameters = MethodCallMapArgumentParameters;
    export const Parameter = MethodCallMapArgumentParameter;
    export type Argument<
        Argument extends Record<PropertyKey, unknown>,
        Type extends ArgumentMapClass<Argument>,
    > = MethodCallMapArgumentArgument<
        Argument,
        Type
    >;
}
export default MethodCallMapArgument;
