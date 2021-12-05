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
