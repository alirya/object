import Omit from "../dist/omit";
import StrictOmit from "../dist/strict-omit";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});


describe(' compatibility', function () {

    let source = {
        string : 'string',
        number : 5,
        boolean : true,
        array : [],
        object : {},
    }

    let result = Omit(source, 'string', 'number');

    let omit : globalThis.Omit<typeof source, 'string'|'number'> = result;
    let strictOmit : StrictOmit<typeof source, 'string'|'number'> = result;

    // @ts-expecerror
    let string : string = result.string;

    // @ts-expecerror
    let number : number = result.number;
    let boolean : boolean = result.boolean;
    let array : any[] = result.array;
    let object : object = result.object;

});


it(' test', function () {

    let source = {
        string : 'string',
        number : 5,
        boolean : true,
        array : [],
        object : {},
    }

    let result = Omit(source, 'string', 'number');

    let omit : globalThis.Omit<typeof source, 'string'|'number'> = result;
    let strictOmit : StrictOmit<typeof source, 'string'|'number'> = result;

    // @ts-expecerror
    expect(result.string).toBe(undefined);

    // @ts-expecerror
    expect(result.number).toBe(undefined);

    expect(result.boolean).toBe(true);
    expect(result.array).toEqual([]);
    expect(result.object).toEqual({});

});
