export type ReadableTypeStatic<
    ObjectType extends object,
    PropertyType extends keyof ObjectType,
    Type extends ObjectType[PropertyType] = ObjectType[PropertyType],
    > =
    {
        [Key in keyof ObjectType] : Key extends  PropertyType ? (Type extends ObjectType[Key] ? Type : ObjectType[Key]) : ObjectType[Key]
    }


export type ReadableTypeDynamic<
    ObjectType extends object = object,
    PropertyType extends PropertyKey = PropertyKey,
    Type = unknown,
    > = ObjectType & {[Key in PropertyType] : Type}




/**
 * check if property {@param property} in {@param object} type is {@template Type}
 * {@param validation} is use for validate value type
 */

export default function ValueParameters<
    ObjectType extends object,
    PropertyType extends keyof ObjectType,
    Type extends ObjectType[PropertyType] = ObjectType[PropertyType],
>(
    object : ObjectType,
    property : PropertyType,
     validation : (value:ObjectType[PropertyType])=>value is Type,
    //{
    //    property,
    //    validation
    //} : Property<PropertyType> & Guard<ObjectType[PropertyType], Type>
) : object is ReadableTypeStatic<ObjectType, PropertyType, Type>

export default function ValueParameters<
    ObjectType extends object = object,
    PropertyType extends PropertyKey = PropertyKey,
    Type = unknown,
>(
    object : object,
    property : PropertyType,
    validation : (value:unknown)=>value is Type,
    //{
    //    property,
    //    validation
    //} : Property<PropertyType> & Guard<unknown, Type>
) : object is ReadableTypeDynamic<ObjectType, PropertyType, Type>

export default function ValueParameters<
    ObjectType extends object = object,
    PropertyType extends PropertyKey = PropertyKey,
    Type = unknown,
>(
    object : object,
    property : PropertyType,
    validation : (value:unknown)=>value is Type,
    //{
    //    property,
    //    validation
    //} : Property<PropertyType> & Guard<unknown, Type>
) : object is ObjectType & {[Key in PropertyType] : Type} {

     return validation(object[<PropertyKey>property]);
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
