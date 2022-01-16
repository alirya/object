import Setter from './setter';
import Getter from './getter';
import MergeGetterSetterParameters, {
    MergeGetterSetterTypeDynamic,
    MergeGetterSetterTypeGetter,
    MergeGetterSetterTypeSetter
} from './merge-getter-setter-parameters';

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

export default function MergeGetterSetterParameter<SetterType extends Setter, GetterType extends Getter> (
    {
        destination,
        source
    } : MergeGetterSetterArgumentSetter<SetterType, GetterType>
) : MergeGetterSetterTypeSetter<SetterType, GetterType>;

export default function MergeGetterSetterParameter<SetterType extends Setter, GetterType extends Getter> (
    {
        destination,
        source
    } : MergeGetterSetterArgumentGetter<SetterType, GetterType>
) : MergeGetterSetterTypeGetter<SetterType, GetterType>;

export default function MergeGetterSetterParameter<SetterType extends Setter, GetterType extends Getter> (
    {
        destination,
        source
    } : MergeGetterSetterArgumentDynamic<SetterType, GetterType>
) : MergeGetterSetterTypeDynamic<SetterType, GetterType>;

export default function MergeGetterSetterParameter (
    {
        destination,
        source
    } : MergeGetterSetterArgumentDynamic<Setter, Getter>
) : MergeGetterSetterTypeDynamic<Setter, Getter> {

    return MergeGetterSetterParameters(destination, source);
}
