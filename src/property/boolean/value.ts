import Property from "../property/property";
import Validation from "@dikac/t-boolean/validation/validation";
import Guard from "@dikac/t-boolean/validation/guard";
import {ReadableArgument, ReadableObject, ReadableParameter} from "./readable";
import Value from "@dikac/t-value/value";

export default Readable;
namespace Readable {

    export const Parameter = ReadableParameter;
    export const Object = ReadableObject;

    export type Argument1<
        ObjectType extends object,
        PropertyType extends keyof ObjectType,
        Type extends ObjectType[PropertyType] = ObjectType[PropertyType],
    > = ReadableArgument1<ObjectType, PropertyType, Type>;

    export type Argument2<
        PropertyType extends PropertyKey = PropertyKey,
        Type = unknown,
    > = ReadableArgument2<PropertyType, Type>;

    export type Type1<
        ObjectType extends object,
        PropertyType extends keyof ObjectType,
        Type extends ObjectType[PropertyType] = ObjectType[PropertyType],
    > = ReadableType1<ObjectType, PropertyType, Type>;

    export type Type2<
        ObjectType extends object = object,
        PropertyType extends PropertyKey = PropertyKey,
        Type = unknown,
    > = ReadableType2<ObjectType, PropertyType, Type>;
}

/**
 * check if property {@param property} in {@param object} type is {@template Type}
 * {@param validation} is use for validate value type
 */

export function ValueParameter<
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
) : object is ReadableType1<ObjectType, PropertyType, Type>

export function ValueParameter<
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
) : object is ReadableType2<ObjectType, PropertyType, Type>

export function ValueParameter<
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


export type ReadableType1<
    ObjectType extends object,
    PropertyType extends keyof ObjectType,
    Type extends ObjectType[PropertyType] = ObjectType[PropertyType],
    > =
    {
        [Key in keyof ObjectType] : Key extends  PropertyType ? (Type extends ObjectType[Key] ? Type : ObjectType[Key]) : ObjectType[Key]
    }


export type ReadableType2<
    ObjectType extends object = object,
    PropertyType extends PropertyKey = PropertyKey,
    Type = unknown,
> = ObjectType & {[Key in PropertyType] : Type}




export type ReadableArgument1<
    ObjectType extends object,
    PropertyType extends keyof ObjectType,
    Type extends ObjectType[PropertyType] = ObjectType[PropertyType],
> = Property<PropertyType> & Guard<ObjectType[PropertyType], Type>;

export type ReadableArgument2<
    PropertyType extends PropertyKey = PropertyKey,
    Type = unknown,
> = Property<PropertyType> & Guard<unknown, Type>;




export function ValueObject<
    ObjectType extends object,
    PropertyType extends keyof ObjectType,
    Type extends ObjectType[PropertyType] = ObjectType[PropertyType],
>(
    object : ObjectType,
    // property : PropertyType,
    // validation : (value:ObjectType[PropertyType])=>value is Type,
    {
        property,
        validation
    } : ReadableArgument1<ObjectType, PropertyType, Type>
) : object is ReadableType1<ObjectType, PropertyType, Type>

export function ValueObject<
    ObjectType extends object = object,
    PropertyType extends PropertyKey = PropertyKey,
    Type = unknown,
>(
    object : object,
    //property : PropertyType,
    //validation : (value:unknown)=>value is Type,
    {
        property,
        validation
    } : ReadableArgument2<PropertyType, Type>
) : object is ReadableType2<ObjectType, PropertyType, Type>

export function ValueObject<
    ObjectType extends object = object,
    PropertyType extends PropertyKey = PropertyKey,
    Type = unknown,
>(
    object : object,
    // property : PropertyType,
    // validation : (value:unknown)=>value is Type,
    {
        property,
        validation
    } : Property<PropertyType> & Guard<unknown, Type>
) : object is ObjectType & {[Key in PropertyType] : Type} {

     return validation(object[<PropertyKey>property]);
}
