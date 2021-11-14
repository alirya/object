import Property from "../property/property/property";
import PropertyParameters from "./property-parameters";
import PropertyParameter, { PropertyArgument } from "./property-parameter";
declare namespace Property {
    const Parameters: typeof PropertyParameters;
    const Parameter: typeof PropertyParameter;
    type Argument<MessageValue> = PropertyArgument<MessageValue>;
}
export default Property;
