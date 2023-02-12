import Value from '@alirya/value/value.js';
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
export function SetMethodParameters<
    This extends object,
    Type,
>(
    object : This,
    property : keyof This,
    value : Type,
    writable  = true,
    configurable  = true,
) : Type {

    return (Object.defineProperty(object, property, {
        value : ()=>value,
        writable,
        configurable
    }) as Record<keyof This, ()=>Type>)[property]();
}

export type SetMethodArgument<
    This extends object,
    Type,
    > = Value<Type> &
    Property<keyof This> &
    {
        object: This;
        writable ?: boolean;
        configurable ?: boolean
    };

export function SetMethodParameter<
    This extends object,
    Type,
>(
    {
        object,
        property,
        value,
        writable = true,
        configurable = true,
    } : SetMethodArgument<This, Type>
) : Type {

    return SetMethodParameters(object, property, value, writable, configurable);
}


namespace SetMethod {
    export const Parameters = SetMethodParameters;
    export const Parameter = SetMethodParameter;
    export type Argument<
        This extends object,
        Type,
    > =  SetMethodArgument<
        This,
        Type
    >;
}
export default SetMethod;
