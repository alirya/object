import Value from '@alirya/value/value';
import Property from '../../property/property/property';
import SetGetterParameters from './set-getter-parameters';

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

export default function SetGetterParameter<
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
