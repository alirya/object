import MapReturn from './map-return';
import {O} from 'ts-toolbelt';
import ArgumentsMapClass from './arguments-map-class';

export type MethodCallMapArgumentsType<
    Argument extends Record<PropertyKey, unknown[]>,
    Type extends ArgumentsMapClass<Argument>,
> = O.Pick<MapReturn<Type>, keyof Argument>;

/**
 * call an record of function or object, by using key from {@param argument} and it's value
 * as rest argument
 *
 * @param object
 * @param argument
 */
export function MethodCallMapArgumentsParameters<
    Argument extends Record<PropertyKey, unknown[]>,
    Type extends ArgumentsMapClass<Argument>,
>(
    object : Type,
    argument : Argument
) : MethodCallMapArgumentsType<Argument, Type> {

    let result : Partial<MethodCallMapArgumentsType<Argument, Type>> = {};

    for (const property in argument) {

        if(object[property]) {

            result[property] = object[property](...argument[property]);
        }
    }

    return <MethodCallMapArgumentsType<Argument, Type>> result;
}


export type MethodCallMapArgumentsArgument<
    Argument extends Record<PropertyKey, unknown[]>,
    Type extends ArgumentsMapClass<Argument>
    > = { object:Type } & { argument:Argument };

export function MethodCallMapArgumentsParameter<
    Argument extends Record<PropertyKey, unknown[]>,
    Type extends ArgumentsMapClass<Argument>,
>(
    {
        object,
        argument,
    } : MethodCallMapArgumentsArgument<Argument, Type>
) : MethodCallMapArgumentsType<Argument, Type>{

    return MethodCallMapArgumentsParameters(object, argument);
}


namespace MethodCallMapArguments {
    export const Parameters = MethodCallMapArgumentsParameters;
    export const Parameter = MethodCallMapArgumentsParameter;
    export type Argument<
        Argument extends Record<PropertyKey, unknown[]>,
        Type extends ArgumentsMapClass<Argument>
    > = MethodCallMapArgumentsArgument<
        Argument,
        Type
    >;
}
export default MethodCallMapArguments;
