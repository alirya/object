import NotEmptyType from '../string/not-empty-parameters';

export default function NotEmptyParameters(
    value,
    subject = 'object',
) : Error {

    return new Error(NotEmptyType(value, false, subject));
}
