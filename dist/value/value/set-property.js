export default function SetProperty(
//object : This,
//property : keyof This,
//value : Type,
//writable : boolean = true,
//configurable : boolean = true,
{ object, property, value, writable = true, configurable = true, }) {
    return Object.defineProperty(object, property, {
        value,
        writable,
        configurable
    })[property];
}
//# sourceMappingURL=set-property.js.map