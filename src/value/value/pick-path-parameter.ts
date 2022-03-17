import {Object} from 'ts-toolbelt';
import Object_ from '../../object/object';
import PickPathParameters from './pick-path-parameters';

export type PickDeepParameterArgument<
    Properties extends ReadonlyArray<PropertyKey>,
    Record extends Object.P.Record<Properties, unknown> = Object.P.Record<Properties, unknown>,
> = Object_<Record> & {
    properties : Properties
};

export default function PickPathParameter<
    Properties extends ReadonlyArray<PropertyKey>,
    Record extends Object.P.Record<Properties, unknown> = Object.P.Record<Properties, unknown>,
>(  {
        object,
        properties,
    } : PickDeepParameterArgument<Properties, Record>
) : Object.Path<Record, Properties>  {


    return (PickPathParameters as any)(object, ...properties);
}
