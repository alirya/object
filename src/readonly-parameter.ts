import Object_ from "./object/object";
import ReadonlyParameters, {ReadonlyPropertiesParametersReturn as ReadonlyPropertiesParameterReturn} from "./readonly-parameters";

export {ReadonlyPropertiesParameterReturn};

export default function ReadonlyParameter<Keys extends (keyof Type)[], Type extends object>(
    {
        object,
    } : Object_<Type>
) : ReadonlyPropertiesParameterReturn<Keys, Type>;

export default function ReadonlyParameter<Keys extends (keyof Type)[], Type extends object>(
    {
        object,
        properties
    } : Object_<Type> & {
        properties : Keys
    }
) : ReadonlyPropertiesParameterReturn<Keys, Type>;

export default function ReadonlyParameter<Keys extends (keyof Type)[], Type extends object>(
    {
        object,
        properties
    } : Object_<Type> & {
        properties ?: Keys
    }
) : ReadonlyPropertiesParameterReturn<Keys, Type> {

    if(!properties) {

        properties =  Object.keys(object) as Keys;
    }

    return ReadonlyParameters(object, ...properties);
}