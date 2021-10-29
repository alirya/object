export default Validatables;
export class ValidatablesParameter {
    constructor(validatables, validation) {
        this.validatables = validatables;
        this.validation = validation;
        this.validatables = validatables;
        this.validation = validation;
        this.valid = this.validation(this.validatables);
    }
}
export class ValidatablesObject extends ValidatablesParameter {
    constructor({ validatables, validation, }) {
        super(validatables, validation);
    }
}
var Validatables;
(function (Validatables) {
    Validatables.Parameter = ValidatablesParameter;
    Validatables.Object = ValidatablesObject;
})(Validatables || (Validatables = {}));
//# sourceMappingURL=validatables.js.map