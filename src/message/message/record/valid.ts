import ValidatableValid from "../../../validatable/record/valid";
import Validatable from "@alirya/validatable/validatable";
import Message from "@alirya/message/message";
import RecordInfer from "./infer";
import Map from "./map";
import RemoveUndefined from "../../../omit-undefined";

export default function Valid<
    Instance extends Record<PropertyKey, Message & Validatable>
>(
    record : Instance
) : Partial<RecordInfer<Instance>> {

    return  Map(<Instance>RemoveUndefined(ValidatableValid(record)));
}
