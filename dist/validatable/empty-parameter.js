import EmptyParameters from "./empty-parameters";
export default class EmptyParameter extends EmptyParameters {
    constructor({ value, message }) {
        super(value, () => message(this));
    }
}
//# sourceMappingURL=empty-parameter.js.map