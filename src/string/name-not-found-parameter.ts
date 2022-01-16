import Validatable from '@alirya/validatable/validatable';
import Value from '@alirya/value/value';
import NameNotFoundParameters from './name-nofound-parameters';

export type NameNotFoundArgument = Validatable & Value & {
    subject ?: string;
    conversion ?: (value:unknown)=>string;
};

export default function NameNotFoundParameter(
    {
        valid,
        value,
        subject = 'type',
        conversion = value=>typeof value,
    } : NameNotFoundArgument
) : string {

    return NameNotFoundParameters(valid, value, subject, conversion);
}
