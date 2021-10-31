import Value from "@dikac/t-value/value";
import StrictOmit from "../strict-omit";
/**
 * check if {@param object} is certain type of record
 * {@param value} use to validate object value
 */
export default Record;
declare namespace Record {
    const Parameter: typeof RecordParameter;
    const Object: typeof RecordObject;
    type Argument<ValueType, KeyType extends PropertyKey = PropertyKey> = RecordArgument<ValueType, KeyType>;
}
export declare function RecordParameter<ValueType>(object: object, value: (value: unknown) => value is ValueType): object is Record<PropertyKey, ValueType>;
export declare function RecordParameter<ValueType, KeyType extends PropertyKey = PropertyKey>(object: object, value: (value: unknown) => value is ValueType, property: (value: PropertyKey) => value is KeyType): object is Record<KeyType, ValueType>;
export declare type RecordArgument<ValueType, KeyType extends PropertyKey = PropertyKey> = Value<(value: unknown) => value is ValueType> & {
    property?: (value: PropertyKey) => value is KeyType;
};
export declare function RecordObject<ValueType>(object: object, { value }: StrictOmit<RecordArgument<ValueType>, 'property'>): object is Record<PropertyKey, ValueType>;
export declare function RecordObject<ValueType, KeyType extends PropertyKey = PropertyKey>(object: object, { value, property }: Required<RecordArgument<ValueType, KeyType>>): object is Record<KeyType, ValueType>;
