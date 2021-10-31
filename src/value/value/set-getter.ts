import Value from "@dikac/t-value/value";
import Property from "../../property/property/property";
import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";


export default SetGetter;
namespace SetGetter {

    export const Parameter = SetGetterParameter;
    export const Object = SetGetterObject;
    export type Argument<
        This extends object,
        Type,
    > = SetGetterArgument<
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
 * @param configurable {@default true}
 */

export function SetGetterParameter<
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

export type SetGetterArgument<
    This extends object,
    Type,
> = Value<Type> &
    Property<keyof This> &
    {   object: This;
        configurable ?: boolean
    }

export function SetGetterObject<
    This extends object,
    Type,
>(
    // object : This,
    // property : keyof This,
    // value : Type,
    // configurable : boolean = true,
    {
        object,
        property,
        value,
        configurable = true,
    } : SetGetterArgument<This, Type>
) : Type {

    return (Object.defineProperty(object, property, {
        get : ()=>value,
        configurable : configurable
    }) as Record<keyof This, Type>)[property];
}
