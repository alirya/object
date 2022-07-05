import {cloneDeep} from 'lodash';

export default function CloneRecursive<Type extends Record<PropertyKey, any> = Record<PropertyKey, any>>(object: Type) : Type {

    return cloneDeep(object);
}