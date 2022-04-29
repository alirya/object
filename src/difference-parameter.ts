import DifferenceParameters from './difference-parameters';
import Compare from '@alirya/boolean/compare/compare';
import Equal from '@alirya/boolean/equal-parameter';
import Callable from '@alirya/function/callable';
import {A} from 'ts-toolbelt';

export type DifferenceParameterArgumentValidation<Type extends object, CompareType extends object> = {
    object : Type[keyof Type];
    compare : A.At<CompareType, keyof Type>;
    key: keyof Type;
};

export type DifferenceParameterArgument<Type extends object, CompareType extends object> = Compare<Readonly<Type>> & {
    object: Readonly<Type>,
    validation:  Callable<[DifferenceParameterArgumentValidation<Type, CompareType>], boolean>,
};

/**
 * option version of {@see DifferenceParameters}
 */
export default function DifferenceParameter<Type extends object, CompareType extends object = Type>(
    {
        object,
        compare,
        validation = ({object, compare}) => Equal({value:object, compare}),
    } : DifferenceParameterArgument<Type, CompareType>
) : Partial<Type> {

    return DifferenceParameters(
        object,
        compare,
        (object, compare : any , key) => validation({key, object, compare})
    );
}
