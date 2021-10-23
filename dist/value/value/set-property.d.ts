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
 * @param writable
 *
 * @param configurable {@default true}
 */
import Value from "@dikac/t-value/value";
import Property from "../../property/property/property";
export default function SetProperty<This extends object, Type>({ object, property, value, writable, configurable, }: Value<Type> & Property<keyof This> & {
    object: This;
} & {
    writable?: boolean;
} & {
    configurable?: boolean;
}): Type;
