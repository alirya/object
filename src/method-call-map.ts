import MapReturn from './map-return';
import {O} from 'ts-toolbelt';
import Map from './function/parameter/record/map';

export type MethodCallMapType<
    Argument extends Record<PropertyKey, unknown[]>,
    Type extends Map<Argument>,
> = O.Pick<MapReturn<Type>, keyof Argument>;

/**
 * call an record of function or object, by using key from {@param argument} and it's value
 * as rest argument
 *
 * @param object
 * @param argument
 */
export function MethodCallMapParameters<
    Argument extends Record<PropertyKey, unknown[]>,
    Type extends Map<Argument>,
>(
    object : Type,
    argument : Argument
) : MethodCallMapType<Argument, Type> {

    let result : Partial<MethodCallMapType<Argument, Type>> = {};

    for (const property in argument) {

        if(object[property]) {

            result[property] = object[property](...argument[property]);
        }
    }

    return <MethodCallMapType<Argument, Type>> result;
}


export type MethodCallMapArgument<
    Argument extends Record<PropertyKey, unknown[]>,
    Type extends Map<Argument>
    > = { object:Type } & { argument:Argument };

export function MethodCallMapParameter<
    Argument extends Record<PropertyKey, unknown[]>,
    Type extends Map<Argument>,
>(
    {
        object,
        argument,
    } : MethodCallMapArgument<Argument, Type>
) : MethodCallMapType<Argument, Type>{

    return MethodCallMapParameters(object, argument);
}


namespace MethodCallMap {
    export const Parameters = MethodCallMapParameters;
    export const Parameter = MethodCallMapParameter;
    export type Argument<
        Argument extends Record<PropertyKey, unknown[]>,
        Type extends Map<Argument>
    > = MethodCallMapArgument<
        Argument,
        Type
    >;
}
export default MethodCallMap;
