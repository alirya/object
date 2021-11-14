import Infer from "./infer";
import { O } from "ts-toolbelt";
import Map from "../../parameter/record/map";
export declare type MethodArgument<Argument extends Record<PropertyKey, unknown[]>, Type extends Map<Argument>> = {
    object: Type;
} & {
    argument: Argument;
};
export default function MethodParameter<Argument extends Record<PropertyKey, unknown[]>, Type extends Map<Argument>>({ object, argument, }: MethodArgument<Argument, Type>): O.Pick<Infer<Type>, keyof Argument>;
