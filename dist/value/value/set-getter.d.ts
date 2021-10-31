import Value from "@dikac/t-value/value";
import Property from "../../property/property/property";
export default SetGetter;
declare namespace SetGetter {
    const Parameter: typeof SetGetterParameter;
    const Object: typeof SetGetterObject;
    type Argument<This extends object, Type> = SetGetterArgument<This, Type>;
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
export declare function SetGetterParameter<This extends object, Type>(object: This, property: keyof This, value: Type, configurable?: boolean): Type;
export declare type SetGetterArgument<This extends object, Type> = Value<Type> & Property<keyof This> & {
    object: This;
    configurable?: boolean;
};
export declare function SetGetterObject<This extends object, Type>({ object, property, value, configurable, }: SetGetterArgument<This, Type>): Type;
