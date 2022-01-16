import SetProperty from '../value/value/set-property-parameters';
import Default from '../default';
import Suffix from '@alirya/string/suffix/suffix';

const defaults = {suffix:'', configurable:true, writable:true};
/**
 * to be used for decorator
 *
 * memoize value from getter and convert to another getter
 *
 * @param configuration
 * @default {suffix:'', configurable:true, writable:true}
 */
export default function MemoizeProperty(
    configuration : Pick<PropertyDescriptor, 'configurable'|'writable'> & Partial<Suffix> = defaults
) : MethodDecorator  {

    const {writable, configurable} = Default(configuration, defaults);

    return function (target, property: string, descriptor: PropertyDescriptor) {

        const symbol = Symbol(property + configuration.suffix);

        Object.defineProperty(target, symbol, descriptor);

        descriptor.get = function () {

            return SetProperty(
                this, property, this[symbol], writable, configurable
            );

        };
    };
}
