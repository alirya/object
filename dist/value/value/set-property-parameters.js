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
// export default SetProperty;
// namespace SetProperty {
//
//     export const Parameter = SetPropertyParameter;
//     export const Object = SetPropertyObject;
//     export type Argument<
//         This extends object,
//         Type,
//         > = SetPropertyArgument<
//         This,
//         Type
//         >;
// }
export default function SetPropertyParameters(object, property, value, writable = true, configurable = true) {
    return Object.defineProperty(object, property, {
        value,
        writable,
        configurable
    })[property];
}
//
// export type SetPropertyArgument<
//     This extends object,
//     Type,
//     > = Value<Type> &
//     Property<keyof This> &
//     {object: This} &
//     {writable ?: boolean} &
//     {configurable ?: boolean}
//
// export function SetPropertyObject<
//     This extends object,
//     Type,
// >(
//     //object : This,
//     //property : keyof This,
//     //value : Type,
//     //writable : boolean = true,
//     //configurable : boolean = true,
//     {
//         object,
//         property,
//         value,
//         writable = true,
//         configurable = true,
//     } : SetPropertyArgument<This, Type>
// ) : Type {
//
//     return SetPropertyParameter(object, property, value, writable, configurable);
// }
//# sourceMappingURL=set-property-parameters.js.map