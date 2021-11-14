import Setter from "./setter";
import Getter from "./getter";
import MergeGetterSetterParameter, { MergeGetterSetterArgumentDynamic, MergeGetterSetterArgumentGetter, MergeGetterSetterArgumentSetter } from "./merge-getter-setter-parameter";
import MergeGetterSetterParameters, { MergeGetterSetterTypeDynamic, MergeGetterSetterTypeGetter, MergeGetterSetterTypeSetter } from "./merge-getter-setter-parameters";
declare namespace MergeGetterSetter {
    const Parameters: typeof MergeGetterSetterParameters;
    const Parameter: typeof MergeGetterSetterParameter;
    type Argument<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterArgumentSetter<SetterType, GetterType> | MergeGetterSetterArgumentGetter<SetterType, GetterType> | MergeGetterSetterArgumentDynamic<SetterType, GetterType>;
    type ArgumentSetter<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterArgumentSetter<SetterType, GetterType>;
    type ArgumentGetter<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterArgumentGetter<SetterType, GetterType>;
    type ArgumentDynamic<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterArgumentDynamic<SetterType, GetterType>;
    type Type<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterTypeSetter<SetterType, GetterType> | MergeGetterSetterTypeGetter<SetterType, GetterType> | MergeGetterSetterTypeDynamic<SetterType, GetterType>;
    type TypeSetter<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterTypeSetter<SetterType, GetterType>;
    type TypeGetter<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterTypeGetter<SetterType, GetterType>;
    type TypeDynamic<SetterType extends Setter, GetterType extends Getter> = MergeGetterSetterTypeDynamic<SetterType, GetterType>;
}
export default MergeGetterSetter;
