import MapCallbackParameters from "./map-callback-parameters";
export default class MapCallbackParameter extends MapCallbackParameters {
    constructor(
    //value: ValueType,
    //public validators : ValidatorsType,
    //private map : (values : RecordParameter<ValidatorsType>, validators : ValidatorsType)=>Result,
    //private validation : (result : Result)=>ValidatableType,
    //  message : (result : Result)=>MessageType,
    { value, validators, map, validation, message }) {
        super(value, validators, map, validation, message);
    }
}
//# sourceMappingURL=map-callback-parameter.js.map