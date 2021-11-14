/**
 * Parse json string to object and check for certain type according to {@param validator}
 * @param json
 * @param validator
 * @param error
 * @param preprocess
 * @constructor
 */

export default function GuardedJsonParameters<Type>(
    value : {toString:()=>string}|string,
    validation : (value:unknown)=>value is Type,
    error : (value : string, object : object)=>Error = (json : string, object : object) => new TypeError('json string is not valid according to validator'),
    preprocess ?: (result:{[Key in keyof Type] : Type[Key]})=>void,
) : Type {

    let string = value.toString();
    let object = JSON.parse(string);

    if(preprocess) {

        preprocess(object);
    }

    if(validation(object)) {

        return object;
    }

    throw error(string, object);
}
