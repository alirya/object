import Value from "@dikac/t-value/value";
import Property from "../../property/property/property";
export default SetMethod;
declare namespace SetMethod {
    const Parameter: typeof SetMethodParameter;
    const Object: typeof SetMethodObject;
    type Argument<This extends object, Type> = SetMethodArgument<This, Type>;
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
export declare function SetMethodParameter<This extends object, Type>(object: This, property: keyof This, value: Type, writable?: boolean, configurable?: boolean): Type;
export declare type SetMethodArgument<This extends object, Type> = Value<Type> & Property<keyof This> & {
    object: This;
    writable?: boolean;
    configurable?: boolean;
};
export declare function SetMethodObject<This extends object, Type>({ object, property, value, writable, configurable, }: SetMethodArgument<This, Type>): Type;
