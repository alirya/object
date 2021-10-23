/**
 * Parse json string to object and check for certain type according to {@param validator}
 * @param json
 * @param validator
 * @param error
 * @param preprocess
 * @constructor
 */
import Value from "@dikac/t-value/value";
import ToString from "@dikac/t-string/to-string";
import Guard from "@dikac/t-boolean/validation/guard";

export default function GuardedJson<Type>(
    // json : {toString:()=>string}|string,
    // validator : (value:unknown)=>value is Type,
    // error : (json : string, object : object)=>Error = (json : string, object : object) => new TypeError('json string is not valid according to validator'),
    // preprocess ?: (result:{[Key in keyof Type] : Type[Key]})=>void,
    {
        value,
        validation,
        error = () => new TypeError('json string is not valid according to validator'),
        preprocess,
    } : Value<ToString|string> &
        Guard<unknown, Type> &
        {
            // error ?: (json : string, object : object)=>Error,
            error ?: (args : Value<ToString|string> & {object:object})=>Error,
            preprocess ?: (result:{[Key in keyof Type] : Type[Key]})=>void
        }
) : Type {

    let string = value.toString();
    let object = JSON.parse(string);

    if(preprocess) {

        preprocess(object);
    }

    if(validation(object)) {

        return object;
    }

    throw error({value:string, object});
}
