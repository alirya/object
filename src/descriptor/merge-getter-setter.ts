import Setter from "./setter";
import Getter from "./getter";


export default MergeGetterSetter;
namespace MergeGetterSetter {

    export const Parameter = MergeGetterSetterParameter;
    export const Object = MergeGetterSetterMergeGetterSetter;
    export type Argument<SetterType extends Setter, GetterType extends Getter> =
        MergeGetterSetterArgument1<SetterType, GetterType> |
        MergeGetterSetterArgument2<SetterType, GetterType> |
        MergeGetterSetterArgument3<SetterType, GetterType>;

    export type Argument1<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterArgument1<SetterType, GetterType>;
    export type Argument2<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterArgument2<SetterType, GetterType>;
    export type Argument3<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterArgument3<SetterType, GetterType>;


    export type Type<SetterType extends Setter, GetterType extends Getter> =
        MergeGetterSetterType1<SetterType, GetterType> |
        MergeGetterSetterType2<SetterType, GetterType> |
        MergeGetterSetterType3<SetterType, GetterType>;

    export type Type1<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterType1<SetterType, GetterType>;
    export type Type2<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterType2<SetterType, GetterType>;
    export type Type3<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterType3<SetterType, GetterType>;
}

export function MergeGetterSetterParameter<SetterType extends Setter, GetterType extends Getter>(
    destination : SetterType,
    source : GetterType
) : MergeGetterSetterType1<SetterType, GetterType>

export function MergeGetterSetterParameter<SetterType extends Setter, GetterType extends Getter>(
    destination : GetterType,
    source : SetterType
) : MergeGetterSetterType2<SetterType, GetterType>

export function MergeGetterSetterParameter<SetterType extends Setter, GetterType extends Getter>(
    destination : GetterType|SetterType,
    source : GetterType|SetterType
) : MergeGetterSetterType3<SetterType, GetterType>

export function MergeGetterSetterParameter(
    destination : Getter|Setter,
    source : Getter|Setter
) : Getter|Setter|(Getter & Setter) {

    if(typeof source.get === "function") {

        destination.get = source.get;
    }

    if(typeof source.set === "function") {

        destination.set = source.set;
    }

    return destination;
}

export type MergeGetterSetterType1<SetterType extends Setter, GetterType extends Getter> =
        Omit<SetterType, 'set'> & Pick<GetterType, 'set'>;

export type MergeGetterSetterType2<SetterType extends Setter, GetterType extends Getter> =
        Omit<GetterType, 'set'> & Pick<SetterType, 'set'>;

export type MergeGetterSetterType3<SetterType extends Setter, GetterType extends Getter> =
        GetterType|SetterType|(GetterType & SetterType);

export type MergeGetterSetterArgument1<SetterType extends Setter, GetterType extends Getter> = {
    destination : SetterType,
    source : GetterType
}

export type MergeGetterSetterArgument2<SetterType extends Setter, GetterType extends Getter> = {
    destination : GetterType,
    source : SetterType
}

export type MergeGetterSetterArgument3<SetterType extends Setter, GetterType extends Getter> = {
    destination : GetterType|SetterType,
    source : GetterType|SetterType
};

export function MergeGetterSetterMergeGetterSetter<SetterType extends Setter, GetterType extends Getter> (
    {
        destination,
        source
    } : MergeGetterSetterArgument1<SetterType, GetterType>
) : MergeGetterSetterType1<SetterType, GetterType>;

export function MergeGetterSetterMergeGetterSetter<SetterType extends Setter, GetterType extends Getter> (
    {
        destination,
        source
    } : MergeGetterSetterArgument2<SetterType, GetterType>
) : MergeGetterSetterType2<SetterType, GetterType>;

export function MergeGetterSetterMergeGetterSetter<SetterType extends Setter, GetterType extends Getter> (
    {
        destination,
        source
    } : MergeGetterSetterArgument3<SetterType, GetterType>
) : MergeGetterSetterType3<SetterType, GetterType>;

export function MergeGetterSetterMergeGetterSetter<SetterType extends Setter, GetterType extends Getter> (
    {
        destination,
        source
    } : MergeGetterSetterArgument1<SetterType, GetterType>
) : MergeGetterSetterType1<SetterType, GetterType> {

    return MergeGetterSetterParameter(destination, source);
}
