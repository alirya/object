/**
 * check if {@param object} is certain type of record
 * {@param value} use to validate object value
 */
export default function RecordParameters<ValueType>(object: object, value: (value: unknown) => value is ValueType): object is Record<PropertyKey, ValueType>;
export default function RecordParameters<ValueType, KeyType extends PropertyKey = PropertyKey>(object: object, value: (value: unknown) => value is ValueType, property: (value: PropertyKey) => value is KeyType): object is Record<KeyType, ValueType>;
