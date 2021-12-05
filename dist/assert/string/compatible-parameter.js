import CompatibleParameters from "./compatible-parameters";
export default function CompatibleParameter({ valid, value, expect, subject = 'type', conversion = value => typeof value, }) {
    return CompatibleParameters(value, valid, expect, subject, conversion);
}
//# sourceMappingURL=compatible-parameter.js.map