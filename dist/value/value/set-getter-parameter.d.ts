import Value from "@dikac/t-value/value";
import Property from "../../property/property/property";
/**
 * set {@param value} for getter value for {@param object}
 * should be used inside getter callback
 *
 * @param object
 *
 * @param property
 * getter key
 *
 * @param value
 * value tobe memoized
 *
 * @param configurable {@default true}
 */
export declare type SetGetterArgument<This extends object, Type> = Value<Type> & Property<keyof This> & {
    object: This;
    configurable?: boolean;
};
export default function SetGetterParameter<This extends object, Type>({ object, property, value, configurable, }: SetGetterArgument<This, Type>): Type;
