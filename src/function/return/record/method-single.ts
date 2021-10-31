import Infer from "./infer";
import {O} from "ts-toolbelt";
import MapSingle from "../../parameter/record/map-single";
import {ObjectObject, ObjectParameter} from "../../../ensure/object";
import {ObjectArgument} from "../../../assert/throwable/object";
import Map from "../../parameter/record/map";
import Value from "@dikac/t-value/value";
import ArgumentContainer from "@dikac/t-function/argument/argument";

/**
 * call an record of function or object, by using key from {@param argument} and it's value
 * as first argument
 *
 * @param object
 * @param argument
 */

export default MethodSingle;
namespace MethodSingle {

    export const Parameter = MethodSingleParameter;
    export const Object = MethodSingleObject;
    export type Argument<
        Argument extends object,
        Type extends MapSingle<Argument>,
    > = MethodSingleArgument<
        Argument,
        Type
    >;
}


export function MethodSingleParameter<
    Argument extends object,
    Type extends MapSingle<Argument>,
>(
    value : Type,
    argument : Argument
) : O.Pick<Infer<Type>, keyof Argument> {

    let result = {};

    for (const [property, value] of Object.entries(argument)) {

        result[property] = value[property](value);
    }

    return <O.Pick<Infer<Type>, keyof Argument>> result;
}


export type MethodSingleArgument<
    Argument extends object,
    Type extends MapSingle<Argument>,
> =
    Value<Type> &
    ArgumentContainer<Argument>;

export function MethodSingleObject<
    Argument extends object,
    Type extends MapSingle<Argument>,
    >(
    // value : Type,
    // argument : Argument,
    {
        value,
        argument,
    } : MethodSingleArgument<Argument, Type>
) : O.Pick<Infer<Type>, keyof Argument> {

    return MethodSingleParameter(value, argument);
}

