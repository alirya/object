import Value from "@alirya/value/value";
import RecordInfer from "./infer";
import MapCallbackGuard from "../../../map-callback";
import ValueValue from "@alirya/value/value/value";

export default function Map<
    Instance extends Record<PropertyKey, Value>
>(
    record : Instance
) : RecordInfer<Instance> {

    return <RecordInfer<Instance>> MapCallbackGuard(record, ValueValue);
}
