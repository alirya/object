import PropertyValueParameter, { PropertyValueArgument } from "./value-validation-parameter";
import PropertyValueParameters from "./value-validation-parameters";
declare namespace PropertyValue {
    const Parameter: typeof PropertyValueParameter;
    const Parameters: typeof PropertyValueParameters;
    type Argument = PropertyValueArgument;
}
export default PropertyValue;
