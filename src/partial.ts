import {Optional} from "utility-types";

type Partial<Object extends object, Key extends keyof Object> = Optional<Object, Key>;

export default Partial;
