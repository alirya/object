import MemoizeGetter from "./value/value/set-property-parameters";
import {O} from "ts-toolbelt";
import {Required} from "utility-types";

export type SetPropertyCallbackParametersReturn<
    This extends object,
    Key extends keyof This
    > = O.Readonly<Required<This, Key>>

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
export default function SetPropertyCallbackParameters<
    This extends object,
    Key extends keyof This
>(
    object : This,
    property : Key,
    factory : ()=>This[Key],
    writable : boolean = true,
    configurable : boolean = true
) : SetPropertyCallbackParametersReturn<This, Key> {

    return Object.defineProperty(object, property, {
        configurable : true,
        get() {
            return MemoizeGetter(
                object,
                <keyof This> property,
                factory(),
                writable,
                configurable
            );
        }
    }) as SetPropertyCallbackParametersReturn<This, Key>;
}



