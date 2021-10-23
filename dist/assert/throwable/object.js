import StringType from "../string/object";
export default function Object_(
// string : unknown,
// subject : string = 'type',
// conversion : (value:unknown)=>string = value=>typeof value,
{ value, subject = 'type', conversion = value => typeof value, }) {
    return new Error(StringType({ valid: false, value, subject, conversion }));
}
//# sourceMappingURL=object.js.map