import Infer from "./infer";
import {O} from "ts-toolbelt";
import MapSingle from "../../parameter/record/map-single";
import Value from "@alirya/value/value";
import ArgumentContainer from "@alirya/function/argument/argument";
import MethodSingleParameters from "./method-single-parameters";

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

export default function MethodSingleParameter<
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

