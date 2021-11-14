import CompatibleParameters from "./compatible-parameters";
export default function CompatibleParameter(
//valid : boolean,
//value : unknown,
//expect : string,
//subject : string = 'type',
//conversion : (value:unknown)=>string = value=>typeof value,
{ valid, value, expect, subject = 'type', conversion = value => typeof value, }) {
    return CompatibleParameters(value, valid, expect, subject, conversion);
}
//# sourceMappingURL=compatible-parameter.js.map