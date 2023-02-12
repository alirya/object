import Setter from './setter.js';
import Getter from './getter.js';

export type MergeGetterSetterTypeSetter<SetterType extends Setter, GetterType extends Getter> =
    Omit<SetterType, 'set'> & Pick<GetterType, 'set'>;

export type MergeGetterSetterTypeGetter<SetterType extends Setter, GetterType extends Getter> =
    Omit<GetterType, 'set'> & Pick<SetterType, 'set'>;

export type MergeGetterSetterTypeDynamic<SetterType extends Setter, GetterType extends Getter> =
    GetterType|SetterType|(GetterType & SetterType);

export function MergeGetterSetterParameters<SetterType extends Setter, GetterType extends Getter>(
    destination : SetterType,
    source : GetterType
) : MergeGetterSetterTypeSetter<SetterType, GetterType>;

export function MergeGetterSetterParameters<SetterType extends Setter, GetterType extends Getter>(
    destination : GetterType,
    source : SetterType
) : MergeGetterSetterTypeGetter<SetterType, GetterType>;

export function MergeGetterSetterParameters<SetterType extends Setter, GetterType extends Getter>(
    destination : GetterType|SetterType,
    source : GetterType|SetterType
) : MergeGetterSetterTypeDynamic<SetterType, GetterType>;

export function MergeGetterSetterParameters(
    destination : Getter|Setter,
    source : Getter|Setter
) : MergeGetterSetterTypeDynamic<Setter, Getter> {

    if(typeof source.get === 'function') {

        destination.get = source.get;
    }

    if(typeof source.set === 'function') {

        destination.set = source.set;
    }

    return destination;
}


export type MergeGetterSetterArgumentSetter<SetterType extends Setter, GetterType extends Getter> = {
    destination : SetterType,
    source : GetterType
};

export type MergeGetterSetterArgumentGetter<SetterType extends Setter, GetterType extends Getter> = {
    destination : GetterType,
    source : SetterType
};

export type MergeGetterSetterArgumentDynamic<SetterType extends Setter, GetterType extends Getter> = {
    destination : GetterType|SetterType,
    source : GetterType|SetterType
};

export function MergeGetterSetterParameter<SetterType extends Setter, GetterType extends Getter> (
    {
        destination,
        source
    } : MergeGetterSetterArgumentSetter<SetterType, GetterType>
) : MergeGetterSetterTypeSetter<SetterType, GetterType>;

export function MergeGetterSetterParameter<SetterType extends Setter, GetterType extends Getter> (
    {
        destination,
        source
    } : MergeGetterSetterArgumentGetter<SetterType, GetterType>
) : MergeGetterSetterTypeGetter<SetterType, GetterType>;

export function MergeGetterSetterParameter<SetterType extends Setter, GetterType extends Getter> (
    {
        destination,
        source
    } : MergeGetterSetterArgumentDynamic<SetterType, GetterType>
) : MergeGetterSetterTypeDynamic<SetterType, GetterType>;

export function MergeGetterSetterParameter (
    {
        destination,
        source
    } : MergeGetterSetterArgumentDynamic<Setter, Getter>
) : MergeGetterSetterTypeDynamic<Setter, Getter> {

    return MergeGetterSetterParameters(destination, source);
}


namespace MergeGetterSetter {
    export const Parameters = MergeGetterSetterParameters;
    export const Parameter = MergeGetterSetterParameter;


    export type SetterTypeSetter<SetterType extends Setter, GetterType extends Getter> =
        MergeGetterSetterTypeSetter<SetterType, GetterType>;


    export type SetterTypeGetter<SetterType extends Setter, GetterType extends Getter> =
        MergeGetterSetterTypeGetter<SetterType, GetterType>;


    export type SetterTypeDynamic<SetterType extends Setter, GetterType extends Getter> =
        MergeGetterSetterTypeDynamic<SetterType, GetterType>;


    export type ArgumentSetter<SetterType extends Setter, GetterType extends Getter> =
        MergeGetterSetterArgumentSetter<
        SetterType,
        GetterType
        >;

    export type ArgumentGetter<SetterType extends Setter, GetterType extends Getter> =
        MergeGetterSetterArgumentGetter<SetterType, GetterType>;

    export type ArgumentDynamic<SetterType extends Setter, GetterType extends Getter> = {
        destination : GetterType|SetterType,
        source : GetterType|SetterType
    };
}
export default MergeGetterSetter;
