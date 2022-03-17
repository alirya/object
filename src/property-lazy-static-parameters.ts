import {O} from 'ts-toolbelt';
import {Required} from 'utility-types';
import PropertyLazyDynamicParameters from "./property-lazy-dynamic-parameters";

export type PropertyLazyStaticParametersReturn<
    This extends object,
    Key extends keyof This
> = O.Readonly<Required<This, Key>>;

/**
 * set property from {@param factory} to getter for {@param object}
 * should be used outside
 *
 * @param object
 *
 * @param property
 * getter key
 *
 * @param writable
 *
 * @param factory
 * @param configurable
 */

export default PropertyLazyDynamicParameters as <
    This extends object,
    Key extends keyof This
> (
    object : This,
    property : Key,
    factory : ()=>This[Key],
    writable ?: boolean,
    configurable ?: boolean
) => PropertyLazyStaticParametersReturn<This, Key>;



