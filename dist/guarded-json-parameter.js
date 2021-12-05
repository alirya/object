import GuardedJsonParameters from "./guarded-json-parameters";
export default function GuardedJsonParameter({ value, validation, error = () => new TypeError('json string is not valid according to validator'), preprocess, }) {
    return GuardedJsonParameters(value, validation, (value, object) => error({ value, object }), preprocess);
}
//# sourceMappingURL=guarded-json-parameter.js.map