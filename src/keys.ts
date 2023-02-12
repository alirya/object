
export function KeysParameters<Type extends Record<PropertyKey, any>>(
    object : Type,
    enumerable : boolean,
    symbol : boolean,
    privates = false,
    constructor = false,
) : (keyof Type)[] {

    const keys = new Set<keyof Type>(Object.keys(object) as (keyof Type)[]);

    if(enumerable || symbol) {

        const prototype = (object.constructor && object.constructor.prototype)
            ? object.constructor.prototype
            : null;

        if(prototype) {

            if(enumerable) {

                let owned = Object.getOwnPropertyNames(prototype);

                if(!privates) {
                    owned = owned.filter(key => key.slice(0, 2) !== '__');
                }

                owned.forEach(value => keys.add(value as keyof Type));
            }

            if(symbol) {

                Object.getOwnPropertySymbols(prototype)
                    .forEach(value => keys.add(value as keyof Type));
            }
        }
    }

    if(symbol) {

        Object.getOwnPropertySymbols(object)
            .forEach(value => keys.add(value as keyof Type));
    }

    if(!constructor) {

        keys.delete('constructor' as keyof Type);
    }

    return Array.from(keys);
}

export type KeysArgument<Type extends Record<PropertyKey, any>> = {
    object : Type,
    enumerable : boolean,
    symbol : boolean,
    privates? : boolean,
    constructor? : boolean,
};

export function KeysParameter<Type extends Record<PropertyKey, any>>(
    {
        object,
        enumerable,
        symbol,
        privates = false,
        constructor = false,
    } : KeysArgument<Type>) {

    return KeysParameters(object, enumerable, symbol, privates, constructor);
}

namespace Keys {
    export const Parameters = KeysParameters;
    export type Argument<Type extends Record<PropertyKey, any>> = KeysArgument<Type>;
    export const Parameter = KeysParameter;
}

export default Keys;