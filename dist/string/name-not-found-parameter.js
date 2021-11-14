import NameNotFoundParameters from "./name-not-found-parameters";
export default function NameNotFoundParameter({ valid, value, subject = 'type', conversion = value => typeof value, }) {
    return NameNotFoundParameters(valid, value, subject, conversion);
}
//# sourceMappingURL=name-not-found-parameter.js.map