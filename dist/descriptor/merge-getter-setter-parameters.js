export default function MergeGetterSetterParameters(destination, source) {
    if (typeof source.get === "function") {
        destination.get = source.get;
    }
    if (typeof source.set === "function") {
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
//# sourceMappingURL=merge-getter-setter-parameters.js.map