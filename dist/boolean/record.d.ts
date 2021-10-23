/**
 * check if {@param object} is certain type of record
 * {@param value} use to validate object value
 */
import Value from "@dikac/t-value/value";
export default function Record<ValueType>(object: object, { value }: Value<(value: unknown) => value is ValueType>): object is Record<PropertyKey, ValueType>;
export default function Record<ValueType, KeyType extends PropertyKey = PropertyKey>(object: object, { value, property }: Value<(value: unknown) => value is ValueType> & {
    property: (value: PropertyKey) => value is KeyType;
}): object is Record<KeyType, ValueType>;
