import StrictAssign from '../dist/strict-assign.js';
it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

interface Data {
    string ?: string;
    number ?: number;
    boolean ?: boolean;
}

describe('compiler compatible', function () {

    it('partial', function () {

        const target : Data = {
            string : 'string'
        };

        const source  = {
            number : 1,
            boolean : false,
        };

        const result = StrictAssign(target, source);

        // @ts-expect-error
        const string : string = result.string;
        const number : number = result.number;
        const boolean : boolean = result.boolean;

    });

    it('extra source', function () {

        const target : Data = {
            string : 'string'
        };

        const source = {
            number : 1,
            boolean : false,
            object : {}
        };

        const result = StrictAssign(target, source);

        // @ts-expect-error
        const string : string = result.string;
        const number : number = result.number;
        const boolean : boolean = result.boolean;
        const object : object = result.object;

    });
});

describe('test', function () {

    const target : Data = {
        string : 'string'
    };

    const source : Data = {
        number : 1,
        boolean : false,
    };


    it('check result', () => {

        const result = StrictAssign(target, source);
        expect(result.string).toBe('string');
        expect(result.number).toBe(1);
        expect(result.boolean).toBe(false);

    });
});
