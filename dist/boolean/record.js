import RecordParameter from "./record-parameter";
import RecordParameters from "./record-parameters";
/**
 * check if {@param object} is certain type of record
 * {@param value} use to validate object value
 */
var Record;
(function (Record) {
    Record.Parameter = RecordParameter;
    Record.Parameters = RecordParameters;
})(Record || (Record = {}));
export default Record;
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
//
//
//
// export type RecordArgument<
//     ValueType,
//     KeyType extends PropertyKey = PropertyKey
// > =
//     Value<(value:unknown)=> value is ValueType> &
//     {property ?: (value:PropertyKey)=> value is KeyType}
//     ;
//
// export function RecordObject<
//     ValueType
// >(
//     object : object,
//     // value : (value:unknown)=> value is ValueType,
//     {value} : StrictOmit<RecordArgument<ValueType>, 'property'>
// ) : object is Record<PropertyKey, ValueType>;
//
// export function RecordObject<
//     ValueType,
//     KeyType extends PropertyKey = PropertyKey
// >(
//     object : object,
//     //value : (value:unknown)=> value is ValueType,
//     //property : (value:PropertyKey)=> value is KeyType,
//     {
//         value,
//         property
//     } : Required<RecordArgument<ValueType, KeyType>>
// ) : object is Record<KeyType, ValueType>;
//
// export function RecordObject<
//     ValueType,
//     KeyType extends PropertyKey = PropertyKey
// >(
//     object : object,
//     //value : (value:unknown)=> value is ValueType,
//     //property ?: (value:PropertyKey)=> value is KeyType,
//     {
//         value,
//         property
//     } : Value<(value:unknown)=> value is ValueType> & {property ?: (value:PropertyKey)=> value is KeyType}
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
//
//
//
//# sourceMappingURL=record.js.map