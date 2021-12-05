import ValidatableMapCallback from "../validatable/map-callback";
export default function MapCallbackParameters(validators, map, validation, message) {
    return function (value) {
        return new ValidatableMapCallback.Parameters(value, validators, map, validation, message);
    };
}
//# sourceMappingURL=map-callback-parameters.js.map