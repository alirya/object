import Value from "@dikac/t-value/value";
import Property from "../../property/property/property";


export default SetMethod;
namespace SetMethod {

    export const Parameter = SetMethodParameter;
    export const Object = SetMethodObject;
    export type Argument<
        This extends object,
        Type,
        > = SetMethodArgument<
        This,
        Type
        >;
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
export function SetMethodParameter<
    This extends object,
    Type,
>(
    object : This,
    property : keyof This,
    value : Type,
    writable : boolean = true,
    configurable : boolean = true,
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
    }

export function SetMethodObject<
    This extends object,
    Type,
>(
    //object : This,
    //property : keyof This,
    //value : Type,
    //writable : boolean = true,
    //configurable : boolean = true,

    {
        object,
        property,
        value,
        writable = true,
        configurable = true,
    } : SetMethodArgument<This, Type>
) : Type {

    return SetMethodParameter(object, property, value, writable, configurable);
}
