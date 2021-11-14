import Value from "@dikac/t-value/value";
import ValueParameter, { ReadableArgumentDynamic, ReadableArgumentStatic } from "./value-parameter";
import ValueParameters, { ReadableTypeDynamic, ReadableTypeStatic } from "./value-parameters";
declare namespace Value {
    const Parameter: typeof ValueParameter;
    const Parameters: typeof ValueParameters;
    type ArgumentStatic<ObjectType extends object, PropertyType extends keyof ObjectType, Type extends ObjectType[PropertyType] = ObjectType[PropertyType]> = ReadableArgumentStatic<ObjectType, PropertyType, Type>;
    type ArgumentDynamic<PropertyType extends PropertyKey = PropertyKey, Type = unknown> = ReadableArgumentDynamic<PropertyType, Type>;
    type Type1<ObjectType extends object, PropertyType extends keyof ObjectType, Type extends ObjectType[PropertyType] = ObjectType[PropertyType]> = ReadableTypeStatic<ObjectType, PropertyType, Type>;
    type Type2<ObjectType extends object = object, PropertyType extends PropertyKey = PropertyKey, Type = unknown> = ReadableTypeDynamic<ObjectType, PropertyType, Type>;
}
export default Value;
