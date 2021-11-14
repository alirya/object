export default function ValueParameters(object, property, validation) {
    return validation(object[property]);
}
//
// export type ReadableArgument1<
//     ObjectType extends object,
//     PropertyType extends keyof ObjectType,
//     Type extends ObjectType[PropertyType] = ObjectType[PropertyType],
// > = Property<PropertyType> & Guard<ObjectType[PropertyType], Type>;
//
// export type ReadableArgument2<
//     PropertyType extends PropertyKey = PropertyKey,
//     Type = unknown,
// > = Property<PropertyType> & Guard<unknown, Type>;
//
// export function ValueObject<
//     ObjectType extends object,
//     PropertyType extends keyof ObjectType,
//     Type extends ObjectType[PropertyType] = ObjectType[PropertyType],
// >(
//     object : ObjectType,
//     // property : PropertyType,
//     // validation : (value:ObjectType[PropertyType])=>value is Type,
//     {
//         property,
//         validation
//     } : ReadableArgument1<ObjectType, PropertyType, Type>
// ) : object is ReadableType1<ObjectType, PropertyType, Type>
//
// export function ValueObject<
//     ObjectType extends object = object,
//     PropertyType extends PropertyKey = PropertyKey,
//     Type = unknown,
// >(
//     object : object,
//     //property : PropertyType,
//     //validation : (value:unknown)=>value is Type,
//     {
//         property,
//         validation
//     } : ReadableArgument2<PropertyType, Type>
// ) : object is ReadableType2<ObjectType, PropertyType, Type>
//
// export function ValueObject<
//     ObjectType extends object = object,
//     PropertyType extends PropertyKey = PropertyKey,
//     Type = unknown,
// >(
//     object : object,
//     // property : PropertyType,
//     // validation : (value:unknown)=>value is Type,
//     {
//         property,
//         validation
//     } : Property<PropertyType> & Guard<unknown, Type>
// ) : object is ObjectType & {[Key in PropertyType] : Type} {
//
//      return validation(object[<PropertyKey>property]);
// }
//# sourceMappingURL=value-parameters.js.map