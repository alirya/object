import SetGetter from '../value/value/set-getter.js';
import Default from '../default.js';
import Suffix from '@axiona/string/suffix/suffix.js';

const defaults = {suffix:'', configurable:true};
/**
 * to be used for decorator
 *
 * memoize value from getter and convert to property
 *
 * @param configuration
 * @default {suffix:'', configurable:true}
 */
export default function MemoizeAccessor(
    configuration : Pick<PropertyDescriptor, 'configurable'> & Partial<Suffix> = defaults
) : MethodDecorator  {

    configuration = Default(configuration, defaults);

    return function (target, property: string, descriptor: PropertyDescriptor) {

        const symbol = Symbol(property + configuration.suffix);

        Object.defineProperty(target, symbol, descriptor);

        descriptor.get = function () {

            return SetGetter.Parameters(
                this,
                property,
                this[symbol],
                configuration.configurable
            );
        };
    };
}
