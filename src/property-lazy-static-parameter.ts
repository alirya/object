import SetPropertyCallbackParameter from './property-lazy-dynamic-parameter';
import {PropertyLazyStaticParametersReturn} from "./property-lazy-static-parameters";

export type SetPropertyCallbackArgumentStatic<
    This extends object,
    Key extends keyof This
> = {
    object : This,
    property : Key,
    factory : ()=>This[Key],
    writable ?: boolean,
    configurable ?: boolean
};

export default SetPropertyCallbackParameter as <
    This extends object,
    Key extends keyof This
>(  {
        object,
        property,
        factory,
        writable,
        configurable,
    } : SetPropertyCallbackArgumentStatic<This, Key>
) => PropertyLazyStaticParametersReturn<This, Key>;