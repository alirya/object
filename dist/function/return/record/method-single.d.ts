import Infer from "./infer";
import { O } from "ts-toolbelt";
import MapSingle from "../../parameter/record/map-single";
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
declare namespace MethodSingle {
    const Parameter: typeof MethodSingleParameter;
    const Object: typeof MethodSingleObject;
    type Argument<Argument extends object, Type extends MapSingle<Argument>> = MethodSingleArgument<Argument, Type>;
}
export declare function MethodSingleParameter<Argument extends object, Type extends MapSingle<Argument>>(value: Type, argument: Argument): O.Pick<Infer<Type>, keyof Argument>;
export declare type MethodSingleArgument<Argument extends object, Type extends MapSingle<Argument>> = Value<Type> & ArgumentContainer<Argument>;
export declare function MethodSingleObject<Argument extends object, Type extends MapSingle<Argument>>({ value, argument, }: MethodSingleArgument<Argument, Type>): O.Pick<Infer<Type>, keyof Argument>;
