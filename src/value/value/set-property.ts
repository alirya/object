import Value from '@axiona/value/value.js';
import Property from '../../property/property/property.js';

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

export function SetPropertyParameters<
    This extends object,
    Type,
>(
    object : This,
    property : keyof This,
    value : Type,
    writable  = true,
    configurable  = true,
) : Type {

    return  (Object.defineProperty(
        object,
        property,
        {
            value,
            writable,
            configurable
        }
    ) as Record<keyof This, Type>)[property];
}


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
    {configurable ?: boolean};

export function SetPropertyParameter<
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


namespace SetProperty {
    export const Parameters = SetPropertyParameters;
    export const Parameter = SetPropertyParameter;
    export type Argument<
        This extends object,
        Type,
    > = SetPropertyArgument<
        This,
        Type
    >;
}
export default SetProperty;
