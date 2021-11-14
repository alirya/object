import SetPropertyParameter from "./set-property-parameter";
import SetPropertyParameters from "./set-property-parameters";
/**
 * set {@param value} for getter value for {@param object}
 * should be used inside getter callback
 *
 * @param object
 *
 * @param property
 * getter key
 *
 * @param value
 * value tobe memoized
 *
 * @param writable
 *
 * @param configurable {@default true}
 */
var SetProperty;
(function (SetProperty) {
    SetProperty.Parameter = SetPropertyParameter;
    SetProperty.Parameters = SetPropertyParameters;
})(SetProperty || (SetProperty = {}));
export default SetProperty;
//# sourceMappingURL=set-property.js.map