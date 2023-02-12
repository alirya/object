import Omit from '../dist/omit.js';
import StrictOmit from '../dist/strict-omit.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it(' compatibility', function () {

    const source = {
        string : 'string',
        number : 5,
        boolean : true,
        array : [],
        object : {},
    };

    const result = Omit.Parameters(source, 'string', 'number');

    const omit : globalThis.Omit<typeof source, 'string'|'number'> = result;
    const strictOmit : StrictOmit<typeof source, 'string'|'number'> = result;

    // @ts-expect-error
    const string : string = result.string;

    // @ts-expect-error
    const number : number = result.number;
    const boolean : boolean = result.boolean;
    const array : any[] = result.array;
    const object : object = result.object;

});


it(' test', function () {

    const source = {
        string : 'string',
        number : 5,
        boolean : true,
        array : [],
        object : {},
    };

    const result = Omit.Parameters(source, 'string', 'number');

    const omit : globalThis.Omit<typeof source, 'string'|'number'> = result;
    const strictOmit : StrictOmit<typeof source, 'string'|'number'> = result;

    // @ts-expect-error
    expect(result.string).toBe(undefined);

    // @ts-expect-error
    expect(result.number).toBe(undefined);

    expect(result.boolean).toBe(true);
    expect(result.array).toEqual([]);
    expect(result.object).toEqual({});

});
