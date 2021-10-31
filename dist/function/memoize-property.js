import SetProperty from "../value/value/set-property";
import Default from "../default";
const defaults = { suffix: '', configurable: true, writable: true };
/**
 * to be used for decorator
 *
 * memoize value from getter and convert to another getter
 *
 * @param configuration
 * @default {suffix:'', configurable:true, writable:true}
 */
export default function MemoizeProperty(configuration = defaults) {
    const { writable, configurable } = Default(configuration, defaults);
    return function (target, property, descriptor) {
        const symbol = Symbol(property + configuration.suffix);
        Object.defineProperty(target, symbol, descriptor);
        descriptor.get = function () {
            return SetProperty.Parameter(this, property, this[symbol], writable, configurable);
        };
    };
}
//# sourceMappingURL=memoize-property.js.map