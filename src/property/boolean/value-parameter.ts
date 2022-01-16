import Property from '../property/property';
import Guard from '@alirya/boolean/validation/guard';
import {ReadableTypeDynamic, ReadableTypeStatic} from './value-parameters';

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
    {
        property,
        validation
    } : ReadableArgumentStatic<ObjectType, PropertyType, Type>
) : object is ReadableTypeStatic<ObjectType, PropertyType, Type>;

export default function ValueParameter<
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

export default function ValueParameter<
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
