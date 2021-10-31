import Infer from "./infer";
import { O } from "ts-toolbelt";
import Map from "../../parameter/record/map";
export default Method;
declare namespace Method {
    const Parameter: typeof MethodParameter;
    const Object: typeof MethodObject;
    type Argument<Argument extends Record<PropertyKey, unknown[]>, Type extends Map<Argument>> = MethodArgument<Argument, Type>;
}
/**
 * call an record of function or object, by using key from {@param argument} and it's value
 * as rest argument
 *
 * @param object
 * @param argument
 */
export declare function MethodParameter<Argument extends Record<PropertyKey, unknown[]>, Type extends Map<Argument>>(object: Type, argument: Argument): O.Pick<Infer<Type>, keyof Argument>;
export declare type MethodArgument<Argument extends Record<PropertyKey, unknown[]>, Type extends Map<Argument>> = {
    object: Type;
} & {
    argument: Argument;
};
export declare function MethodObject<Argument extends Record<PropertyKey, unknown[]>, Type extends Map<Argument>>({ object, argument, }: MethodArgument<Argument, Type>): O.Pick<Infer<Type>, keyof Argument>;
