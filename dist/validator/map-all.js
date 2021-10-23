import ValidateMap from "./validatable/record/map";
import MapCallback from "./map-callback";
export default function MapAll(validators, validation, message) {
    return MapCallback({
        validators,
        map: ({ value, validators }) => {
            return ValidateMap({ value, validators });
        },
        validation, message
    });
}
//# sourceMappingURL=map-all.js.map