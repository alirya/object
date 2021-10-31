import Infer from "./infer";
import {O} from "ts-toolbelt";
import Map from "../../parameter/record/map";
import Value from "@dikac/t-value/value";
import ArgumentContainer from "@dikac/t-function/argument/argument";
import {ObjectArgument} from "../../../assert/throwable/object";
import {ObjectObject, ObjectParameter} from "../../../ensure/object";

export default Method;
namespace Method {

    export const Parameter = MethodParameter;
    export const Object = MethodObject;
    export type Argument<
        Argument extends Record<PropertyKey, unknown[]>,
        Type extends Map<Argument>,
    > = MethodArgument<Argument, Type>;
}


/**
 * call an record of function or object, by using key from {@param argument} and it's value
 * as rest argument
 *
 * @param object
 * @param argument
 */
export function MethodParameter<
    Argument extends Record<PropertyKey, unknown[]>,
    Type extends Map<Argument>,
>(
    object : Type,
    argument : Argument
) : O.Pick<Infer<Type>, keyof Argument> {

    let result = {};

    for (const [property, value] of Object.entries(argument)) {

        result[property] = value[property](...<any>value);
    }

    return <O.Pick<Infer<Type>, keyof Argument>> result;
}

export type MethodArgument<
    Argument extends Record<PropertyKey, unknown[]>,
    Type extends Map<Argument>> = { object:Type } & { argument:Argument };

export function MethodObject<
    Argument extends Record<PropertyKey, unknown[]>,
    Type extends Map<Argument>,
>(
    // value : Type,
    // argument : Argument,
    {
        object,
        argument,
    } : MethodArgument<Argument, Type>
) : O.Pick<Infer<Type>, keyof Argument> {

    return MethodParameter(object, argument);
}
