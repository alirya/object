import MergeGetterSetterParameter from "./merge-getter-setter-parameter";
import MergeGetterSetterParameters from "./merge-getter-setter-parameters";
var MergeGetterSetter;
(function (MergeGetterSetter) {
    MergeGetterSetter.Parameters = MergeGetterSetterParameters;
    MergeGetterSetter.Parameter = MergeGetterSetterParameter;
})(MergeGetterSetter || (MergeGetterSetter = {}));
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
//# sourceMappingURL=merge-getter-setter.js.map