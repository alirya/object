import {Readonly} from "ts-toolbelt/out/Object/Readonly";
import {UnionOf} from "ts-toolbelt/out/List/UnionOf";
import WritableParameters from "./property/boolean/writable-parameters";

export type ReadonlyPropertiesParametersReturn<Keys extends (keyof Type)[], Type extends object> = Readonly<Type, UnionOf<Keys>>;

export default function ReadonlyParameters<Type extends object>(
    object : Type,
) : Readonly<Type>;

export default function ReadonlyParameters<Keys extends (keyof Type)[], Type extends object>(
    object : Type,
    ...properties: Keys
) : ReadonlyPropertiesParametersReturn<Keys, Type>;

export default function ReadonlyParameters<Keys extends (keyof Type)[], Type extends object>(
    object : Type,
    ...properties: Keys
) : ReadonlyPropertiesParametersReturn<Keys, Type> {

    if(!properties.length) {

        properties = Object.keys(object) as Keys;
    }

    for (const property of properties) {

        if(WritableParameters(object, property)) {

            Object.defineProperty(object, property, {
                writable: false
            });
        }
    }

    return object as ReadonlyPropertiesParametersReturn<Keys, Type>;
}