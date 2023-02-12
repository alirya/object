import Default from '../default.js';
import Suffix from '@alirya/string/suffix/suffix.js';
import SetMethod from '../value/value/set-method.js';

const defaults = {suffix:'', configurable:true};
/**
 * to be used for decorator
 *
 * memoize value from method
 *
 * @param configuration
 * @default {suffix:'', configurable:true}
 */
export default function MemoizeMethod(
    configuration : Pick<PropertyDescriptor, 'configurable'> & Partial<Suffix> = defaults
) : MethodDecorator  {

    configuration = Default(configuration, defaults);

    return function (target, property: string, descriptor: PropertyDescriptor) {

        const symbol = Symbol(property + configuration.suffix);

        Object.defineProperty(target, symbol, descriptor);

        descriptor.value = function (...args) {

            return SetMethod.Parameters(
                this,
                property,
                this[symbol](args),
                false,
                configuration.configurable
            );
        };
    };
}
