import MapReturn from './map-return';
import {O} from 'ts-toolbelt';
import ArgumentMapClass from './argument-map-class';
import Value from '@alirya/value/value';
import ArgumentContainer from '@alirya/function/argument/argument';
import ArgumentsMapClass from './arguments-map-class';


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
    argument : Argument
) : MethodCallMapArgumentType<Argument, Type> {

    let result : Partial<MethodCallMapArgumentType<Argument, Type>> = {};

    for (const property in argument) {

        if(object[property]) {

            result[property] = object[property](argument[property]);
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
    ArgumentContainer<Argument>;

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
