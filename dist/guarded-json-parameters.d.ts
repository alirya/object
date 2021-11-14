/**
 * Parse json string to object and check for certain type according to {@param validator}
 * @param json
 * @param validator
 * @param error
 * @param preprocess
 * @constructor
 */
export default function GuardedJsonParameters<Type>(value: {
    toString: () => string;
} | string, validation: (value: unknown) => value is Type, error?: (value: string, object: object) => Error, preprocess?: (result: {
    [Key in keyof Type]: Type[Key];
}) => void): Type;
