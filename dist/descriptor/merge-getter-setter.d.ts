import Setter from "./setter";
import Getter from "./getter";
export default MergeGetterSetter;
declare namespace MergeGetterSetter {
    const Parameter: typeof MergeGetterSetterParameter;
    const Object: typeof MergeGetterSetterMergeGetterSetter;
    type Argument<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterArgument1<SetterType, GetterType> | MergeGetterSetterArgument2<SetterType, GetterType> | MergeGetterSetterArgument3<SetterType, GetterType>;
    type Argument1<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterArgument1<SetterType, GetterType>;
    type Argument2<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterArgument2<SetterType, GetterType>;
    type Argument3<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterArgument3<SetterType, GetterType>;
    type Type<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterType1<SetterType, GetterType> | MergeGetterSetterType2<SetterType, GetterType> | MergeGetterSetterType3<SetterType, GetterType>;
    type Type1<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterType1<SetterType, GetterType>;
    type Type2<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterType2<SetterType, GetterType>;
    type Type3<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterType3<SetterType, GetterType>;
}
export declare function MergeGetterSetterParameter<SetterType extends Setter, GetterType extends Getter>(destination: SetterType, source: GetterType): MergeGetterSetterType1<SetterType, GetterType>;
export declare function MergeGetterSetterParameter<SetterType extends Setter, GetterType extends Getter>(destination: GetterType, source: SetterType): MergeGetterSetterType2<SetterType, GetterType>;
export declare function MergeGetterSetterParameter<SetterType extends Setter, GetterType extends Getter>(destination: GetterType | SetterType, source: GetterType | SetterType): MergeGetterSetterType3<SetterType, GetterType>;
export declare type MergeGetterSetterType1<SetterType extends Setter, GetterType extends Getter> = Omit<SetterType, 'set'> & Pick<GetterType, 'set'>;
export declare type MergeGetterSetterType2<SetterType extends Setter, GetterType extends Getter> = Omit<GetterType, 'set'> & Pick<SetterType, 'set'>;
export declare type MergeGetterSetterType3<SetterType extends Setter, GetterType extends Getter> = GetterType | SetterType | (GetterType & SetterType);
export declare type MergeGetterSetterArgument1<SetterType extends Setter, GetterType extends Getter> = {
    destination: SetterType;
    source: GetterType;
};
export declare type MergeGetterSetterArgument2<SetterType extends Setter, GetterType extends Getter> = {
    destination: GetterType;
    source: SetterType;
};
export declare type MergeGetterSetterArgument3<SetterType extends Setter, GetterType extends Getter> = {
    destination: GetterType | SetterType;
    source: GetterType | SetterType;
};
export declare function MergeGetterSetterMergeGetterSetter<SetterType extends Setter, GetterType extends Getter>({ destination, source }: MergeGetterSetterArgument1<SetterType, GetterType>): MergeGetterSetterType1<SetterType, GetterType>;
export declare function MergeGetterSetterMergeGetterSetter<SetterType extends Setter, GetterType extends Getter>({ destination, source }: MergeGetterSetterArgument2<SetterType, GetterType>): MergeGetterSetterType2<SetterType, GetterType>;
export declare function MergeGetterSetterMergeGetterSetter<SetterType extends Setter, GetterType extends Getter>({ destination, source }: MergeGetterSetterArgument3<SetterType, GetterType>): MergeGetterSetterType3<SetterType, GetterType>;
