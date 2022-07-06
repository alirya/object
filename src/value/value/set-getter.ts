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
 * @param configurable {@default true}
 */

export function SetGetterParameters<
    This extends object,
    Type,
>(
     object : This,
     property : keyof This,
     value : Type,
     configurable : boolean = true,
) : Type {

    return (Object.defineProperty(object, property, {
        get : ()=>value,
        configurable : configurable
    }) as Record<keyof This, Type>)[property];
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
 * @param configurable {@default true}
 */


export type SetGetterArgument<
    This extends object,
    Type,
> = Value<Type> &
    Property<keyof This> &
    {   object: This;
        configurable ?: boolean
    };

export function SetGetterParameter<
    This extends object,
    Type,
>(
    {
        object,
        property,
        value,
        configurable = true,
    } : SetGetterArgument<This, Type>
) : Type {

    return SetGetterParameters(object, property, value, configurable);
}


namespace SetGetter {
    export const Parameters = SetGetterParameters;
    export const Parameter = SetGetterParameter;
    export type Argument<
        This extends object,
        Type,
    > = SetGetterArgument<
        This,
        Type
    >;
}
export default SetGetter;
