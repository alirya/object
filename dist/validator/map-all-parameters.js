import ValidateMap from "./validatable/record/map";
import MapCallback from "./map-callback";
export default function MapAllParameters(validators, validation, message) {
    return MapCallback.Parameters(validators, (value) => ValidateMap.Parameters(value, validators), validation, message);
}
//# sourceMappingURL=map-all-parameters.js.map