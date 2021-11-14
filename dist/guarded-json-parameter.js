import GuardedJsonParameters from "./guarded-json-parameters";
export default function GuardedJsonParameter(
// json : {toString:()=>string}|string,
// validator : (value:unknown)=>value is Type,
// error : (json : string, object : object)=>Error = (json : string, object : object) => new TypeError('json string is not valid according to validator'),
// preprocess ?: (result:{[Key in keyof Type] : Type[Key]})=>void,
{ value, validation, error = () => new TypeError('json string is not valid according to validator'), preprocess, }) {
    return GuardedJsonParameters(value, validation, (value, object) => error({ value, object }), preprocess);
}
//# sourceMappingURL=guarded-json-parameter.js.map