import StrictOmit from "../dist/strict-omit";
import {Omit as UtilityTypesOmit} from "utility-types";
import {Object} from "ts-toolbelt";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

interface Test {

    string : string;
    boolean : boolean;
    number : number;
}


describe('compiler compatibility', function () {

    let member : StrictOmit<Test, 'string'>;
    let members : StrictOmit<Test, 'string'|'boolean'>;

    // @ts-expecerror
    let nonmember : StrictOmit<Test, 'non'>;
    // @ts-expecerror
    let nonmembers : StrictOmit<Test, 'non'|'non2'>;

    let withValue : StrictOmit<Test, 'string'> = {
        boolean : true,
        number : 1,
    }

});

describe('utility types compiler compatibility', function () {

    let member : UtilityTypesOmit<Test, 'string'>;
    let members : UtilityTypesOmit<Test, 'string'|'boolean'>;

    let nonmember : UtilityTypesOmit<Test, 'non'>;
    let nonmembers : UtilityTypesOmit<Test, 'non'|'non2'>;

    let withValue : UtilityTypesOmit<Test, 'string'> = {
        boolean : true,
        number : 1,
    }

});

describe('ts toolbelt compiler compatibility', function () {

    let member : Object.Omit<Test, 'string'>;
    let members : Object.Omit<Test, 'string'|'boolean'>;

    let nonmember : Object.Omit<Test, 'non'>;
    let nonmembers : Object.Omit<Test, 'non'|'non2'>;

    let withValue : Object.Omit<Test, 'string'> = {
        boolean : true,
        number : 1,
    }

});

describe('native compiler compatibility', function () {

    let member : globalThis.Omit<Test, 'string'>;
    let members : globalThis.Omit<Test, 'string'|'boolean'>;

    let nonmember : globalThis.Omit<Test, 'non'>;
    let nonmembers : globalThis.Omit<Test, 'non'|'non2'>;

    let withValue : globalThis.Omit<Test, 'string'> = {
        boolean : true,
        number : 1,
    }

});

