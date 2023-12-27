import CaseInsensitiveObject from 'case-insensitive-object';
import {IsFunction} from '@axiona/function/boolean/function.js';

let CaseInsensitiveObjectFunction = CaseInsensitiveObject;
if(!IsFunction(CaseInsensitiveObjectFunction)) {
    if(IsFunction((CaseInsensitiveObjectFunction as any).default)) {
        CaseInsensitiveObjectFunction = (CaseInsensitiveObjectFunction as any).default;
    }
}

export default function CaseInsensitive<Type extends object>(object: Type) : Type {

    return CaseInsensitiveObjectFunction(object);
}
