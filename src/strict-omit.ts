import {OmitStrict} from './omit';

/**
 * @deprecated
 * Strict Omit
 * native, {@package utility-types}, {@package ts-toolbelt} does not provide strict
 */
type StrictOmit<Object extends object, Key extends keyof  Object> = OmitStrict<Object, Key>;

export default StrictOmit;
