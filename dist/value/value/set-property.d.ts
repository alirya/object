import Value from "@dikac/t-value/value";
import Property from "../../property/property/property";
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
export default SetProperty;
declare namespace SetProperty {
    const Parameter: typeof SetPropertyParameter;
    const Object: typeof SetPropertyObject;
    type Argument<This extends object, Type> = SetPropertyArgument<This, Type>;
}
export declare function SetPropertyParameter<This extends object, Type>(object: This, property: keyof This, value: Type, writable?: boolean, configurable?: boolean): Type;
export declare type SetPropertyArgument<This extends object, Type> = Value<Type> & Property<keyof This> & {
    object: This;
} & {
    writable?: boolean;
} & {
    configurable?: boolean;
};
export declare function SetPropertyObject<This extends object, Type>({ object, property, value, writable, configurable, }: SetPropertyArgument<This, Type>): Type;
