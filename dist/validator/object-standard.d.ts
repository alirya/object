import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
export default function ObjectStandard(): Validator<unknown, object, Readonly<Instance<object, string>>>;
