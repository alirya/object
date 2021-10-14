import Validator from "@dikac/t-validator/validator";
import NotEmptyValidatable from "../validatable/not-empty";
export default function NotEmptyStandard(): Validator<object, object, boolean, boolean, NotEmptyValidatable<object, string>>;
