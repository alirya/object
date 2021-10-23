export default class Validatables {
    constructor(
    // public validatables : RecordType,
    // public validation : (value:RecordType)=>Boolean,
    { validatables, validation, }) {
        this.validatables = validatables;
        this.validation = validation;
        this.valid = this.validation(this.validatables);
    }
}
//# sourceMappingURL=validatables.js.map