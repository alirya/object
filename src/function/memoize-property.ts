import SetProperty from '../value/value/set-property.js';
import Default from '../default.js';
import Suffix from '@axiona/string/suffix/suffix.js';

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

            return SetProperty.Parameters(
                this, property, this[symbol], writable, configurable
            );

        };
    };
}
