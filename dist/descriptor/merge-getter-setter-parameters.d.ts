import Setter from "./setter";
import Getter from "./getter";
export declare type MergeGetterSetterTypeSetter<SetterType extends Setter, GetterType extends Getter> = Omit<SetterType, 'set'> & Pick<GetterType, 'set'>;
export declare type MergeGetterSetterTypeGetter<SetterType extends Setter, GetterType extends Getter> = Omit<GetterType, 'set'> & Pick<SetterType, 'set'>;
export declare type MergeGetterSetterTypeDynamic<SetterType extends Setter, GetterType extends Getter> = GetterType | SetterType | (GetterType & SetterType);
export default function MergeGetterSetterParameters<SetterType extends Setter, GetterType extends Getter>(destination: SetterType, source: GetterType): MergeGetterSetterTypeSetter<SetterType, GetterType>;
export default function MergeGetterSetterParameters<SetterType extends Setter, GetterType extends Getter>(destination: GetterType, source: SetterType): MergeGetterSetterTypeGetter<SetterType, GetterType>;
export default function MergeGetterSetterParameters<SetterType extends Setter, GetterType extends Getter>(destination: GetterType | SetterType, source: GetterType | SetterType): MergeGetterSetterTypeDynamic<SetterType, GetterType>;
