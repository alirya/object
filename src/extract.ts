import {O, L} from 'ts-toolbelt';

/**
 * extract {@template ObjectTemplate} by {@template Key}, extracted value will be
 * removed from {@template ObjectTemplate}
 */
export type ExtractReturn<
    ObjectTemplate extends object,
    Key extends (keyof ObjectTemplate)[] = (keyof ObjectTemplate)[]
> = {
    keys : Key,
    result : O.Pick<ObjectTemplate, L.UnionOf<Key>>,
    object : Omit<ObjectTemplate, L.UnionOf<Key>>,
};

export function ExtractParameters<
    ObjectTemplate extends object,
    Key extends (keyof ObjectTemplate)[] = (keyof ObjectTemplate)[]
>(
    object : ObjectTemplate,
    keys : [...Key]
) : ExtractReturn<ObjectTemplate, Key> {

    const result : Partial<ObjectTemplate> = {};

    for(const key of keys) {

        result[key] =  object[key];
        delete object[key];
    }

    return {
        result : result as O.Pick<ObjectTemplate, L.UnionOf<Key>>,
        object,
        keys
    };
}

export type ExtractParameterArgument<
    ObjectTemplate extends object,
    Key extends (keyof ObjectTemplate)[] = (keyof ObjectTemplate)[]
> = {
    object : ObjectTemplate,
    keys : [...Key]
};


export function ExtractParameter<
    ObjectTemplate extends object,
    Key extends (keyof ObjectTemplate)[] = (keyof ObjectTemplate)[]
>(
    {
        object,
        keys
    } : ExtractParameterArgument<ObjectTemplate, Key>
) : ExtractReturn<ObjectTemplate, Key> {

    return ExtractParameters(object, keys);
}


namespace Extract {
    export type Return<
        ObjectTemplate extends object,
        Key extends (keyof ObjectTemplate)[] = (keyof ObjectTemplate)[]
    > = ExtractReturn<
        ObjectTemplate,
        Key
    >;
    export const Parameters = ExtractParameters;
    export type ParameterArgument<
        ObjectTemplate extends object,
        Key extends (keyof ObjectTemplate)[] = (keyof ObjectTemplate)[]
    > = ExtractParameterArgument<
        ObjectTemplate,
        Key
    >;
    export const Parameter = ExtractParameter;
}
export default Extract;