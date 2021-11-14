import Infer from "./infer";
import { O } from "ts-toolbelt";
import MapSingle from "../../parameter/record/map-single";
/**
 * call an record of function or object, by using key from {@param argument} and it's value
 * as first argument
 *
 * @param value
 * @param argument
 */
export default function MethodSingleParameters<Argument extends object, Type extends MapSingle<Argument>>(value: Type, argument: Argument): O.Pick<Infer<Type>, keyof Argument>;
