import ProcessEnv = NodeJS.ProcessEnv;
import Callable from '@alirya/function/callable';
import SetPathParameters from './set-path-parameters';
import EnvironmentParameters from './environment-parameters';


export default function EnvironmentParameter<
    Assumption extends object,
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
