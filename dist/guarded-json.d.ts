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
export default function GuardedJson<Type>({ value, validation, error, preprocess, }: Value<ToString | string> & Guard<unknown, Type> & {
    error?: (args: Value<ToString | string> & {
        object: object;
    }) => Error;
    preprocess?: (result: {
        [Key in keyof Type]: Type[Key];
    }) => void;
}): Type;
