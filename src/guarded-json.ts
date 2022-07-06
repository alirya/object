import Value from '@alirya/value/value.js';
import ToString from '@alirya/string/to-string.js';
import Guard from '@alirya/boolean/validation/guard.js';

/**
 * Parse json string to object and check for certain type according to {@param validation}
 * @param value
 * @param validation
 * @param error
 * @param preprocess
 * @constructor
 */

export function GuardedJsonParameters<Type>(
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

/**
 * Parse json string to object and check for certain type according to {@param validator}
 * @param json
 * @param validator
 * @param error
 * @param preprocess
 * @constructor
 */
export function GuardedJsonParameter<Type>(
    {
        value,
        validation,
        error = () => new TypeError('json string is not valid according to validator'),
        preprocess,
    } : Value<ToString|string> &
        Guard<unknown, Type> &
        {
            error ?: (args : Value<ToString|string> & {object:object})=>Error,
            preprocess ?: (result:{[Key in keyof Type] : Type[Key]})=>void
        }
) : Type {

   return GuardedJsonParameters(value, validation, (value, object) => error({value, object}), preprocess);
}


namespace GuardedJson {
    export const Parameters = GuardedJsonParameters;
    export const Parameter = GuardedJsonParameter;
}
export default GuardedJson;
