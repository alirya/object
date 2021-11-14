import Value from "@dikac/t-value/value";
import ValueParameter, {ReadableArgumentDynamic, ReadableArgumentStatic} from "./value-parameter";
import ValueParameters, {ReadableTypeDynamic, ReadableTypeStatic} from "./value-parameters";

namespace Value {

    export const Parameter = ValueParameter;
    export const Parameters = ValueParameters;

    export type ArgumentStatic<
        ObjectType extends object,
        PropertyType extends keyof ObjectType,
        Type extends ObjectType[PropertyType] = ObjectType[PropertyType],
    > = ReadableArgumentStatic<ObjectType, PropertyType, Type>;

    export type ArgumentDynamic<
        PropertyType extends PropertyKey = PropertyKey,
        Type = unknown,
    > = ReadableArgumentDynamic<PropertyType, Type>;

    export type Type1<
        ObjectType extends object,
        PropertyType extends keyof ObjectType,
        Type extends ObjectType[PropertyType] = ObjectType[PropertyType],
    > = ReadableTypeStatic<ObjectType, PropertyType, Type>;

    export type Type2<
        ObjectType extends object = object,
        PropertyType extends PropertyKey = PropertyKey,
        Type = unknown,
    > = ReadableTypeDynamic<ObjectType, PropertyType, Type>;
}

export default Value;
