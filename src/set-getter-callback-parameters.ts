import {O} from "ts-toolbelt";
import {Required} from "utility-types";
import SetPropertyCallback from "./set-property-callback-parameters";

export type SetGetterCallbackParametersReturn<
    This extends object,
    Key extends keyof This
    > = O.Readonly<Required<This, Key>>

/**
 * set return from {@param factory} to getter for {@param object}
 * should be used outside
 *
 * @param object
 *
 * @param property
 * getter key
 *
 * @param factory
 * @param configurable
 * @param writable
 */
export default function SetGetterCallbackParameters<
    This extends object,
    Key extends keyof This
>(
    object : This,
    property : Key,
    factory : ()=>This[Key],
    configurable : boolean = true,
    writable : boolean = false,
) : SetGetterCallbackParametersReturn<This, Key> {

    return SetPropertyCallback(object, property, factory, writable, configurable);
}

