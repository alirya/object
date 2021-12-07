import Value from "@dikac/t-value/value";
import Property from "../../property/property/property";
import SetPropertyParameters from "./set-property-parameters";

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


export type SetPropertyArgument<
    This extends object,
    Type,
    > = Value<Type> &
    Property<keyof This> &
    {object: This} &
    {writable ?: boolean} &
    {configurable ?: boolean}

export default function SetPropertyParameter<
    This extends object,
    Type,
>(
    {
        object,
        property,
        value,
        writable = true,
        configurable = true,
    } : SetPropertyArgument<This, Type>
) : Type {

    return SetPropertyParameters(object, property, value, writable, configurable);
}
