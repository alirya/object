import Property from "../property/property";
import Validation from "@dikac/t-boolean/validation/validation";
import Guard from "@dikac/t-boolean/validation/guard";
/**
 * check if property {@param property} in {@param object} type is {@template Type}
 * {@param validation} is use for validate value type
 */

export default function Value<
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
    } : Property<PropertyType> & Guard<ObjectType[PropertyType], Type>
) : object is {
    [Key in keyof ObjectType] : Key extends  PropertyType ? (Type extends ObjectType[Key] ? Type : ObjectType[Key]) : ObjectType[Key]
}

export default function Value<
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
    } : Property<PropertyType> & Guard<unknown, Type>
) : object is ObjectType & {[Key in PropertyType] : Type}

export default function Value<
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
