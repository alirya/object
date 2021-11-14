import Setter from "./setter";
import Getter from "./getter";
import MergeGetterSetterParameter, {
    MergeGetterSetterArgumentDynamic,
    MergeGetterSetterArgumentGetter,
    MergeGetterSetterArgumentSetter
} from "./merge-getter-setter-parameter";

import MergeGetterSetterParameters, {
    MergeGetterSetterTypeDynamic,
    MergeGetterSetterTypeGetter,
    MergeGetterSetterTypeSetter
} from "./merge-getter-setter-parameters";



namespace MergeGetterSetter {

    export const Parameters = MergeGetterSetterParameters;
    export const Parameter = MergeGetterSetterParameter;
    export type Argument<SetterType extends Setter, GetterType extends Getter> =
        MergeGetterSetterArgumentSetter<SetterType, GetterType> |
        MergeGetterSetterArgumentGetter<SetterType, GetterType> |
        MergeGetterSetterArgumentDynamic<SetterType, GetterType>;

    export type ArgumentSetter<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterArgumentSetter<SetterType, GetterType>;
    export type ArgumentGetter<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterArgumentGetter<SetterType, GetterType>;
    export type ArgumentDynamic<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterArgumentDynamic<SetterType, GetterType>;


    export type Type<SetterType extends Setter, GetterType extends Getter> =
        MergeGetterSetterTypeSetter<SetterType, GetterType> |
        MergeGetterSetterTypeGetter<SetterType, GetterType> |
        MergeGetterSetterTypeDynamic<SetterType, GetterType>;

    export type TypeSetter<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterTypeSetter<SetterType, GetterType>;
    export type TypeGetter<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterTypeGetter<SetterType, GetterType>;
    export type TypeDynamic<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterTypeDynamic<SetterType, GetterType>;
}
export default MergeGetterSetter;
//
// export function MergeGetterSetterParameter<SetterType extends Setter, GetterType extends Getter>(
//     destination : SetterType,
//     source : GetterType
// ) : MergeGetterSetterType1<SetterType, GetterType>
//
// export function MergeGetterSetterParameter<SetterType extends Setter, GetterType extends Getter>(
//     destination : GetterType,
//     source : SetterType
// ) : MergeGetterSetterType2<SetterType, GetterType>
//
// export function MergeGetterSetterParameter<SetterType extends Setter, GetterType extends Getter>(
//     destination : GetterType|SetterType,
//     source : GetterType|SetterType
// ) : MergeGetterSetterType3<SetterType, GetterType>
//
// export function MergeGetterSetterParameter(
//     destination : Getter|Setter,
//     source : Getter|Setter
// ) : Getter|Setter|(Getter & Setter) {
//
//     if(typeof source.get === "function") {
//
//         destination.get = source.get;
//     }
//
//     if(typeof source.set === "function") {
//
//         destination.set = source.set;
//     }
//
//     return destination;
// }
//
// export type MergeGetterSetterType1<SetterType extends Setter, GetterType extends Getter> =
//         Omit<SetterType, 'set'> & Pick<GetterType, 'set'>;
//
// export type MergeGetterSetterType2<SetterType extends Setter, GetterType extends Getter> =
//         Omit<GetterType, 'set'> & Pick<SetterType, 'set'>;
//
// export type MergeGetterSetterType3<SetterType extends Setter, GetterType extends Getter> =
//         GetterType|SetterType|(GetterType & SetterType);
//
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
