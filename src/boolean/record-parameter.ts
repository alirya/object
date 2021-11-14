import Value from "@dikac/t-value/value";
import StrictOmit from "../strict-omit";
/**
 * check if {@param object} is certain type of record
 * {@param value} use to validate object value
 */
//
// export default Record;
// namespace Record {
//
//     export const Parameter = RecordParameter;
//     export const Object = RecordObject;
//     export type Argument<
//         ValueType,
//         KeyType extends PropertyKey = PropertyKey
//         > =
//         RecordArgument<ValueType, KeyType>;
// }
//
//
// export function RecordParameter<
//     ValueType
// >(
//     object : object,
//     value : (value:unknown)=> value is ValueType,
//     // {value} : Value<(value:unknown)=> value is ValueType>
// ) : object is Record<PropertyKey, ValueType>;
//
// export function RecordParameter<
//     ValueType,
//     KeyType extends PropertyKey = PropertyKey
// >(
//     object : object,
//     value : (value:unknown)=> value is ValueType,
//     property : (value:PropertyKey)=> value is KeyType,
//     //{
//     //    value,
//     //    property
//     //} : Value<(value:unknown)=> value is ValueType> & {property : (value:PropertyKey)=> value is KeyType}
// ) : object is Record<KeyType, ValueType>;
//
// export function RecordParameter<
//     ValueType,
//     KeyType extends PropertyKey = PropertyKey
// >(
//     object : object,
//     value : (value:unknown)=> value is ValueType,
//     property ?: (value:PropertyKey)=> value is KeyType,
//     // {
//     //     value,
//     //     property
//     // } : Value<(value:unknown)=> value is ValueType> & {property ?: (value:PropertyKey)=> value is KeyType}
// ) : object is Record<KeyType, ValueType> {
//
//     for(const [prop, val] of Object.entries(object)) {
//
//         if(property) {
//
//             if(!property(prop)) {
//
//                 return false;
//             }
//         }
//
//         if(!value(val)) {
//
//             return false;
//         }
//     }
//
//     return true;
// }



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
    // value : (value:unknown)=> value is ValueType,
    {value} : StrictOmit<RecordArgument<ValueType>, 'property'>
) : object is Record<PropertyKey, ValueType>;

export default function RecordParameter<
    ValueType,
    KeyType extends PropertyKey = PropertyKey
>(
    object : object,
    //value : (value:unknown)=> value is ValueType,
    //property : (value:PropertyKey)=> value is KeyType,
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
    //value : (value:unknown)=> value is ValueType,
    //property ?: (value:PropertyKey)=> value is KeyType,
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



