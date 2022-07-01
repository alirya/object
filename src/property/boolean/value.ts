import Property from '../property/property';
import Guard from '@alirya/boolean/validation/guard';
export type ReadableTypeStatic<
    ObjectType extends object,
    PropertyType extends keyof ObjectType,
    Type extends ObjectType[PropertyType] = ObjectType[PropertyType],
    > =
    {
        [Key in keyof ObjectType] : Key extends  PropertyType ? (Type extends ObjectType[Key] ? Type : ObjectType[Key]) : ObjectType[Key]
    };


export type ReadableTypeDynamic<
    ObjectType extends object = object,
    PropertyType extends PropertyKey = PropertyKey,
    Type = unknown,
    > = ObjectType & {[Key in PropertyType] : Type};




/**
 * check if property {@param property} in {@param object} type is {@template Type}
 * {@param validation} is use for validate value type
 */

export function ValueParameters<
    ObjectType extends object,
    PropertyType extends keyof ObjectType,
    Type extends ObjectType[PropertyType] = ObjectType[PropertyType],
>(
    object : ObjectType,
    property : PropertyType,
     validation : (value:ObjectType[PropertyType])=>value is Type,
) : object is ReadableTypeStatic<ObjectType, PropertyType, Type>;

export function ValueParameters<
    ObjectType extends object = object,
    PropertyType extends PropertyKey = PropertyKey,
    Type = unknown,
>(
    object : object,
    property : PropertyType,
    validation : (value:unknown)=>value is Type,
) : object is ReadableTypeDynamic<ObjectType, PropertyType, Type>;

export function ValueParameters<
    ObjectType extends object = object,
    PropertyType extends PropertyKey = PropertyKey,
    Type = unknown,
>(
    object : object,
    property : PropertyType,
    validation : (value:unknown)=>value is Type,
) : object is ObjectType & {[Key in PropertyType] : Type} {

     return validation(object[<PropertyKey>property]);
}



export type ReadableArgumentStatic<
    ObjectType extends object,
    PropertyType extends keyof ObjectType,
    Type extends ObjectType[PropertyType] = ObjectType[PropertyType],
> = Property<PropertyType> & Guard<ObjectType[PropertyType], Type>;

export type ReadableArgumentDynamic<
    PropertyType extends PropertyKey = PropertyKey,
    Type = unknown,
> = Property<PropertyType> & Guard<unknown, Type>;


export function ValueParameter<
    ObjectType extends object,
    PropertyType extends keyof ObjectType,
    Type extends ObjectType[PropertyType] = ObjectType[PropertyType],
>(
    object : ObjectType,
    {
        property,
        validation
    } : ReadableArgumentStatic<ObjectType, PropertyType, Type>
) : object is ReadableTypeStatic<ObjectType, PropertyType, Type>;

export function ValueParameter<
    ObjectType extends object = object,
    PropertyType extends PropertyKey = PropertyKey,
    Type = unknown,
>(
    object : object,
    {
        property,
        validation
    } : ReadableArgumentDynamic<PropertyType, Type>
) : object is ReadableTypeDynamic<ObjectType, PropertyType, Type>;

export function ValueParameter<
    ObjectType extends object = object,
    PropertyType extends PropertyKey = PropertyKey,
    Type = unknown,
>(
    object : object,
    {
        property,
        validation
    } : Property<PropertyType> & Guard<unknown, Type>
) : object is ObjectType & {[Key in PropertyType] : Type} {

     return validation(object[<PropertyKey>property]);
}


namespace Value {
    export const Parameters = ValueParameters;
    export const Parameter = ValueParameter;

    export type TypeStatic<
        ObjectType extends object,
        PropertyType extends keyof ObjectType,
        Type extends ObjectType[PropertyType] = ObjectType[PropertyType],
    > = ReadableTypeStatic<
            ObjectType,
            PropertyType,
            Type
    >;


    export type TypeDynamic<
        ObjectType extends object = object,
        PropertyType extends PropertyKey = PropertyKey,
        Type = unknown,
    > = ReadableTypeDynamic<
        ObjectType,
        PropertyType,
        Type
    >;

    export type ArgumentStatic<
        ObjectType extends object,
        PropertyType extends keyof ObjectType,
        Type extends ObjectType[PropertyType] = ObjectType[PropertyType],
    > = ReadableArgumentStatic<
        ObjectType,
        PropertyType,
        Type
    >;

    export type ArgumentDynamic<
        PropertyType extends PropertyKey = PropertyKey,
        Type = unknown,
        > = ReadableArgumentDynamic<
        PropertyType,
        Type
        >;
}
export default Value;
