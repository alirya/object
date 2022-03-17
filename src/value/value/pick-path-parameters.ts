import {Object} from 'ts-toolbelt';
import {get} from 'lodash';

export default function PickPathParameters<
    Properties extends ReadonlyArray<PropertyKey>,
    Record extends Object.P.Record<Properties, unknown> = Object.P.Record<Properties, unknown>,
>(
    object : Record,
    ...properties: Properties
) : Object.Path<Record, Properties>  {

    if(properties.length) {

        return get(object, properties);

    } else {

        return object as Object.Path<Record, Properties>;
    }


}

