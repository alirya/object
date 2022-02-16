import {Object} from "ts-toolbelt";
import Object_ from "../../object/object";
import PickDeepParameters from "./pick-deep-parameters";

export type PickDeepParameterArgument<
    Properties extends PropertyKey[],
    Record extends Object.P.Record<Properties, unknown>,
> = Object_<Record> & {
    properties : Properties
}

export default function PickDeepParameter<
    Properties extends PropertyKey[],
    Record extends Object.P.Record<Properties, unknown>,
>(  {
        object,
        properties,
    } : PickDeepParameterArgument<Properties, Record>
) : Object.P.Pick<Record, Properties>  {

    return PickDeepParameters(object, properties);
}
