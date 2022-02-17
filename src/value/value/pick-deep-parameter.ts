import {Object} from "ts-toolbelt";
import Object_ from "../../object/object";
import PickDeepParameters from "./pick-deep-parameters";

export type PickDeepParameterArgument<
    Properties extends ReadonlyArray<PropertyKey>,
    Record extends object,
> = Object_<Record> & {
    properties : Properties
}

export default function PickDeepParameter<
    Properties extends ReadonlyArray<PropertyKey>,
    Record extends object,
>(  {
        object,
        properties,
    } : PickDeepParameterArgument<Properties, Record>
) : Object.Path<Record, Properties>  {


    return (PickDeepParameters as any)(object, ...properties);
}
