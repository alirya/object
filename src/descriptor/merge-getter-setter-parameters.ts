import Setter from "./setter";
import Getter from "./getter";

export type MergeGetterSetterTypeSetter<SetterType extends Setter, GetterType extends Getter> =
    Omit<SetterType, 'set'> & Pick<GetterType, 'set'>;

export type MergeGetterSetterTypeGetter<SetterType extends Setter, GetterType extends Getter> =
    Omit<GetterType, 'set'> & Pick<SetterType, 'set'>;

export type MergeGetterSetterTypeDynamic<SetterType extends Setter, GetterType extends Getter> =
    GetterType|SetterType|(GetterType & SetterType);

export default function MergeGetterSetterParameters<SetterType extends Setter, GetterType extends Getter>(
    destination : SetterType,
    source : GetterType
) : MergeGetterSetterTypeSetter<SetterType, GetterType>

export default function MergeGetterSetterParameters<SetterType extends Setter, GetterType extends Getter>(
    destination : GetterType,
    source : SetterType
) : MergeGetterSetterTypeGetter<SetterType, GetterType>

export default function MergeGetterSetterParameters<SetterType extends Setter, GetterType extends Getter>(
    destination : GetterType|SetterType,
    source : GetterType|SetterType
) : MergeGetterSetterTypeDynamic<SetterType, GetterType>

export default function MergeGetterSetterParameters(
    destination : Getter|Setter,
    source : Getter|Setter
) : MergeGetterSetterTypeDynamic<Setter, Getter> {

    if(typeof source.get === "function") {

        destination.get = source.get;
    }

    if(typeof source.set === "function") {

        destination.set = source.set;
    }

    return destination;
}


// export type MergeGetterSetterArgument1<SetterType extends Setter, GetterType extends Getter> = {
//     destination : SetterType,
//     source : GetterType
// }
//
// export type MergeGetterSetterArgument2<SetterType extends Setter, GetterType extends Getter> = {
//     destination : GetterType,
//     source : SetterType
// }
//
// export type MergeGetterSetterArgument3<SetterType extends Setter, GetterType extends Getter> = {
//     destination : GetterType|SetterType,
//     source : GetterType|SetterType
// };
//
// export function MergeGetterSetterMergeGetterSetter<SetterType extends Setter, GetterType extends Getter> (
//     {
//         destination,
//         source
//     } : MergeGetterSetterArgument1<SetterType, GetterType>
// ) : MergeGetterSetterType1<SetterType, GetterType>;
//
// export function MergeGetterSetterMergeGetterSetter<SetterType extends Setter, GetterType extends Getter> (
//     {
//         destination,
//         source
//     } : MergeGetterSetterArgument2<SetterType, GetterType>
// ) : MergeGetterSetterType2<SetterType, GetterType>;
//
// export function MergeGetterSetterMergeGetterSetter<SetterType extends Setter, GetterType extends Getter> (
//     {
//         destination,
//         source
//     } : MergeGetterSetterArgument3<SetterType, GetterType>
// ) : MergeGetterSetterType3<SetterType, GetterType>;
//
// export function MergeGetterSetterMergeGetterSetter<SetterType extends Setter, GetterType extends Getter> (
//     {
//         destination,
//         source
//     } : MergeGetterSetterArgument1<SetterType, GetterType>
// ) : MergeGetterSetterType1<SetterType, GetterType> {
//
//     return MergeGetterSetterParameter(destination, source);
// }
