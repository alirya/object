(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../property/boolean/property", "@dikac/t-boolean/boolean"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const property_1 = require("../../property/boolean/property");
    const boolean_1 = require("@dikac/t-boolean/boolean");
    function Property(value) {
        if (!boolean_1.default(value.enumerable)) {
            return false;
        }
        if (!boolean_1.default(value.configurable)) {
            return false;
        }
        if (value.writable !== true) {
            return false;
        }
        if (!property_1.default(value, 'value')) {
            return false;
        }
        return true;
    }
    exports.default = Property;
});
//# sourceMappingURL=property.js.map