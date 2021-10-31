import Property from "../property/property";
import Guard from "@dikac/t-boolean/validation/guard";
import { ReadableObject, ReadableParameter } from "./readable";
export default Readable;
declare namespace Readable {
    const Parameter: typeof ReadableParameter;
    const Object: typeof ReadableObject;
    type Argument1<ObjectType extends object, PropertyType extends keyof ObjectType, Type extends ObjectType[PropertyType] = ObjectType[PropertyType]> = ReadableArgument1<ObjectType, PropertyType, Type>;
    type Argument2<PropertyType extends PropertyKey = PropertyKey, Type = unknown> = ReadableArgument2<PropertyType, Type>;
    type Type1<ObjectType extends object, PropertyType extends keyof ObjectType, Type extends ObjectType[PropertyType] = ObjectType[PropertyType]> = ReadableType1<ObjectType, PropertyType, Type>;
    type Type2<ObjectType extends object = object, PropertyType extends PropertyKey = PropertyKey, Type = unknown> = ReadableType2<ObjectType, PropertyType, Type>;
}
/**
 * check if property {@param property} in {@param object} type is {@template Type}
 * {@param validation} is use for validate value type
 */
export declare function ValueParameter<ObjectType extends object, PropertyType extends keyof ObjectType, Type extends ObjectType[PropertyType] = ObjectType[PropertyType]>(object: ObjectType, property: PropertyType, validation: (value: ObjectType[PropertyType]) => value is Type): object is ReadableType1<ObjectType, PropertyType, Type>;
export declare function ValueParameter<ObjectType extends object = object, PropertyType extends PropertyKey = PropertyKey, Type = unknown>(object: object, property: PropertyType, validation: (value: unknown) => value is Type): object is ReadableType2<ObjectType, PropertyType, Type>;
export declare type ReadableType1<ObjectType extends object, PropertyType extends keyof ObjectType, Type extends ObjectType[PropertyType] = ObjectType[PropertyType]> = {
    [Key in keyof ObjectType]: Key extends PropertyType ? (Type extends ObjectType[Key] ? Type : ObjectType[Key]) : ObjectType[Key];
};
export declare type ReadableType2<ObjectType extends object = object, PropertyType extends PropertyKey = PropertyKey, Type = unknown> = ObjectType & {
    [Key in PropertyType]: Type;
};
export declare type ReadableArgument1<ObjectType extends object, PropertyType extends keyof ObjectType, Type extends ObjectType[PropertyType] = ObjectType[PropertyType]> = Property<PropertyType> & Guard<ObjectType[PropertyType], Type>;
export declare type ReadableArgument2<PropertyType extends PropertyKey = PropertyKey, Type = unknown> = Property<PropertyType> & Guard<unknown, Type>;
export declare function ValueObject<ObjectType extends object, PropertyType extends keyof ObjectType, Type extends ObjectType[PropertyType] = ObjectType[PropertyType]>(object: ObjectType, { property, validation }: ReadableArgument1<ObjectType, PropertyType, Type>): object is ReadableType1<ObjectType, PropertyType, Type>;
export declare function ValueObject<ObjectType extends object = object, PropertyType extends PropertyKey = PropertyKey, Type = unknown>(object: object, { property, validation }: ReadableArgument2<PropertyType, Type>): object is ReadableType2<ObjectType, PropertyType, Type>;
