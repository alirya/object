import Value from "@dikac/t-value/value";
import StrictOmit from "../strict-omit";
/**
 * check if {@param object} is certain type of record
 * {@param value} use to validate object value
 */

export type RecordArgument<
    ValueType,
    KeyType extends PropertyKey = PropertyKey
> =
    Value<(value:unknown)=> value is ValueType> &
    {property ?: (value:PropertyKey)=> value is KeyType}
    ;

export default function RecordParameter<
    ValueType
>(
    object : object,
    {value} : StrictOmit<RecordArgument<ValueType>, 'property'>
) : object is Record<PropertyKey, ValueType>;

export default function RecordParameter<
    ValueType,
    KeyType extends PropertyKey = PropertyKey
>(
    object : object,
    {
        value,
        property
    } : Required<RecordArgument<ValueType, KeyType>>
) : object is Record<KeyType, ValueType>;

export default function RecordParameter<
    ValueType,
    KeyType extends PropertyKey = PropertyKey
>(
    object : object,
    {
        value,
        property
    } : Value<(value:unknown)=> value is ValueType> & {property ?: (value:PropertyKey)=> value is KeyType}
) : object is Record<KeyType, ValueType> {

    for(const [prop, val] of Object.entries(object)) {

        if(property) {

            if(!property(prop)) {

                return false;
            }
        }

        if(!value(val)) {

            return false;
        }
    }

    return true;
}



