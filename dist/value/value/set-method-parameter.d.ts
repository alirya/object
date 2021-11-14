import Value from "@dikac/t-value/value";
import Property from "../../property/property/property";
export declare type SetMethodArgument<This extends object, Type> = Value<Type> & Property<keyof This> & {
    object: This;
    writable?: boolean;
    configurable?: boolean;
};
export default function SetMethodParameter<This extends object, Type>({ object, property, value, writable, configurable, }: SetMethodArgument<This, Type>): Type;
