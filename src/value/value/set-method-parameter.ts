import Value from "@alirya/value/value";
import Property from "../../property/property/property";
import SetMethodParameters from "./set-method-parameters";

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

export default function SetMethodParameter<
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
