import Property from "../property/property";
import Guard from "@dikac/t-boolean/validation/guard";
import {ReadableTypeDynamic, ReadableTypeStatic} from "./value-parameters";


export type ReadableArgumentStatic<
    ObjectType extends object,
    PropertyType extends keyof ObjectType,
    Type extends ObjectType[PropertyType] = ObjectType[PropertyType],
> = Property<PropertyType> & Guard<ObjectType[PropertyType], Type>;

export type ReadableArgumentDynamic<
    PropertyType extends PropertyKey = PropertyKey,
    Type = unknown,
> = Property<PropertyType> & Guard<unknown, Type>;



export default function ValueParameter<
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
    } : ReadableArgumentStatic<ObjectType, PropertyType, Type>
) : object is ReadableTypeStatic<ObjectType, PropertyType, Type>

export default function ValueParameter<
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
    } : ReadableArgumentDynamic<PropertyType, Type>
) : object is ReadableTypeDynamic<ObjectType, PropertyType, Type>

export default function ValueParameter<
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
