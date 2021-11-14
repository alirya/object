import ValidateMap from "./validatable/record/map-partial";
import MapCallback from "./map-callback";
export default function MapPartialParameters(validators, validation, message) {
    return MapCallback.Parameters(validators, 
    //map :({value, validators})=>ValidateMap({value, validators}),
    ValidateMap.Parameters, validation, message);
}
//# sourceMappingURL=map-partial-parameters.js.map