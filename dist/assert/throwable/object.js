import StringType from "../string/object";
export default Object_;
var Object_;
(function (Object_) {
    Object_.Parameter = ObjectParameter;
    Object_.Object = ObjectObject;
})(Object_ || (Object_ = {}));
export function ObjectParameter(value, subject = 'type', conversion = value => typeof value) {
    return new Error(StringType.Parameter(value, false, subject, conversion));
}
export function ObjectObject(
// string : unknown,
// subject : string = 'type',
// conversion : (value:unknown)=>string = value=>typeof value,
{ value, subject = 'type', conversion = value => typeof value, }) {
    return ObjectParameter(value, subject, conversion);
}
//# sourceMappingURL=object.js.map