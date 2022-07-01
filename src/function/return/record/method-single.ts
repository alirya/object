import Infer from './infer';
import {O} from 'ts-toolbelt';
import MapSingle from '../../parameter/record/map-single';
import Value from '@alirya/value/value';
import ArgumentContainer from '@alirya/function/argument/argument';

/**
 * call an record of function or object, by using key from {@param argument} and it's value
 * as first argument
 *
 * @param object
 * @param argument
 */

export function MethodSingleParameters<
    Argument extends object,
    Type extends MapSingle<Argument>,
>(
    object : Type,
    argument : Argument
) : O.Pick<Infer<Type>, keyof Argument> {

    let result = {};

    for (const [property, arg] of Object.entries(argument)) {

        result[property] = object[property](arg);
    }

    return <O.Pick<Infer<Type>, keyof Argument>> result;
}


/**
 * call an record of function or object, by using key from {@param argument} and it's value
 * as first argument
 *
 * @param object
 * @param argument
 */


export type MethodSingleArgument<
    Argument extends object,
    Type extends MapSingle<Argument>,
> =
    Value<Type> &
    ArgumentContainer<Argument>;

export function MethodSingleParameter<
    Argument extends object,
    Type extends MapSingle<Argument>,
    >(
    {
        value,
        argument,
    } : MethodSingleArgument<Argument, Type>
) : O.Pick<Infer<Type>, keyof Argument> {

    return MethodSingleParameters(value, argument);
}



namespace MethodSingle {
    export const Parameters = MethodSingleParameters;
    export const Parameter = MethodSingleParameter;
    export type Argument<
        Argument extends object,
        Type extends MapSingle<Argument>,
    > = MethodSingleArgument<
        Argument,
        Type
    >;
}
export default MethodSingle;
