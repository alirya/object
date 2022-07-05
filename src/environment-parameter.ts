import Callable from '@alirya/function/callable';
import EnvironmentParameters from './environment-parameters';


export default function EnvironmentParameter<
    Assumption extends Record<string, any>,
    Flat extends Record<string, any> = Record<string, any>
>(  {
        object,
        prefix,
        callback = (keys, key, value)=>value
    } : {
        object: Flat,
        prefix: string,
        callback : Callable<[keys:string[], key:string, value:any], Flat[keyof Flat]>,
    }
) : Partial<Assumption> {

    return EnvironmentParameters(object, prefix, callback);
}
