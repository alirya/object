export default function GuardedJson(
// json : {toString:()=>string}|string,
// validator : (value:unknown)=>value is Type,
// error : (json : string, object : object)=>Error = (json : string, object : object) => new TypeError('json string is not valid according to validator'),
// preprocess ?: (result:{[Key in keyof Type] : Type[Key]})=>void,
{ value, validation, error = () => new TypeError('json string is not valid according to validator'), preprocess, }) {
    let string = value.toString();
    let object = JSON.parse(string);
    if (preprocess) {
        preprocess(object);
    }
    if (validation(object)) {
        return object;
    }
    throw error({ value: string, object });
}
//# sourceMappingURL=guarded-json.js.map