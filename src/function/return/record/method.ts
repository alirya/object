import Infer from './infer';
import {O} from 'ts-toolbelt';
import Map from '../../parameter/record/map';
// TODO MOVE TO MAP
/**
 * call an record of function or object, by using key from {@param argument} and it's value
 * as rest argument
 *
 * @param object
 * @param argument
 */
export function MethodParameters<
    Argument extends Record<PropertyKey, unknown[]>,
    Type extends Map<Argument>,
>(
    object : Type,
    argument : Argument
) : O.Pick<Infer<Type>, keyof Argument> {

    let result = {};

    for (const [property, args] of Object.entries(argument)) {

        result[property] = object[property](...<any>args);
    }

    return <O.Pick<Infer<Type>, keyof Argument>> result;
}


export type MethodArgument<
    Argument extends Record<PropertyKey, unknown[]>,
    Type extends Map<Argument>
    > = { object:Type } & { argument:Argument };

export function MethodParameter<
    Argument extends Record<PropertyKey, unknown[]>,
    Type extends Map<Argument>,
>(
    {
        object,
        argument,
    } : MethodArgument<Argument, Type>
) : O.Pick<Infer<Type>, keyof Argument> {

    return MethodParameters(object, argument);
}


namespace Method {
    export const Parameters = MethodParameters;
    export const Parameter = MethodParameter;
    export type Argument<
        Argument extends Record<PropertyKey, unknown[]>,
        Type extends Map<Argument>
    > = MethodArgument<
        Argument,
        Type
    >;
}
export default Method;
