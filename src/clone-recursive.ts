import {cloneDeep} from 'lodash-es';

export default function CloneRecursive<Type extends Record<PropertyKey, any> = Record<PropertyKey, any>>(object: Type) : Type {

    return cloneDeep(object);
}