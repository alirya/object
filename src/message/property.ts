import Property from "../property/property/property";
import PropertyParameters from "./property-parameters";
import PropertyParameter, {PropertyArgument} from "./property-parameter";


namespace Property {

    export const Parameters = PropertyParameters;
    export const Parameter = PropertyParameter;
    export type Argument<MessageValue> = PropertyArgument<MessageValue>;
}

export default Property;
